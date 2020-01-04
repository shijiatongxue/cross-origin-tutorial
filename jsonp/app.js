const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const data = {
    name: 'hello jsonp'
  }
  const cb = url.parse(req.url, true).query.callback;
  const resData = `${cb}(${JSON.stringify(data)})`;
  res.writeHead(200);
  res.end(resData);
}).listen(3000);