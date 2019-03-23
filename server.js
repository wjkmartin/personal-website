'use strict';
const path = require('path');
const express = require('express');
const require_all = require('require-all');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

app.use(express.static(path.resolve(__dirname, './static')));

for (const [name, controller] of Object.entries(require_all({dirname: path.resolve(__dirname, './controllers')}))) {
  app.use(`/${name}`, controller);
}

app.get('/', (req, res) => {
  res.render('index');
});

app.use((req, res) => res.render('404', {url: req.url}));

(async () => {
  await new Promise((resolve, reject) =>
      require('http')
          .Server(app)
          .listen(Number(process.env.PORT) || 3000, resolve)
          .on('error', reject)
  );
})();