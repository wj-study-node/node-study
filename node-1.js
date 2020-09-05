var http = require('http')  //引入http模块
// 创建一个http服务器 并设置回调函数
http.createServer(function(request, response){
    // 当访问8124接口的时候就会执行这个回调函数
    response.writeHead(200, {'Content-Type': 'text/plain'})
    // response.end 返回给请求端的数据
    response.end('Hellow Word')
}).listen(8124)  //设置端口号
// 在node环境 输出的日志
console.log('Server running at http://127.0.0.1:8124/')
