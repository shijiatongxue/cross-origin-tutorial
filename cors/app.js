const http = require('http');

http.createServer((req, res) => {
  console.log('request', req)
  res.writeHead(200, {
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end('hello cors');
}).listen(3000);