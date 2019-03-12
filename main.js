const {request} = require("http");
let requestStream = request({
  hostname: "willmartin.ca",
  path: "/index.html",
  method: "GET",
  headers: {Accept: "text/html"}
}, response => {
  console.log("Server responded with status code",
              response.statusCode);
});
requestStream.end();