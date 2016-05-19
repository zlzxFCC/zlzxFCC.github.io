/*nodejs本质是javascript的执行环境*/
var http = require('http'); //加载http模块，处理http的任务，让服务器在1337端口监听请求，请求进来，告诉服务器该干嘛，传入
http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1'); //监听回调 请求，响应内容
console.log('running');


var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello World\n');
}); //监听回调 请求，响应内容

server.listen(1337, '127.0.0.1');
console.log('running');


// 模块
