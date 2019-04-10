const fs = require('fs');
const path = require('path');

module.exports = class BlogPost {
	constructor(title, body) {
		this.title = title;
		this.body = body;
		this.id = Date.now();
	}

	save() {
		const p = path.join(path.dirname(process.mainModule.filename), 'data', 'posts', `${this.id}.json`);
        let post = {
            title: this.title,
            body: this.body
        }
		fs.writeFile(p, JSON.stringify(post), err => {
			console.log(err);
		});
	}

	static fetchAll() {
		// 
	}

	static fetchLast() {
        // const p = path.join(path.dirname(process.mainModule.filename), 'data', 'posts');
		// fs.readdir(p, (err, items), )
	}
};
