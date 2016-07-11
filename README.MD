
# nodeTest 

## 环境依赖

* node 
* mongodb 

## 启动项目

```bash
## node service
node app.js
```

## 中间件

* koa
* koa-router
* koa-body-parser
* koa-static
* koa-logger
* mongoose



# rest API 用法

```bash
var http = require('http');
var equal = require('assert').equal;
 
var username = 'Test';
var password = '1234';
var _auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');

var options = {
    host: 'localhost',
    port: 8081,
    path: '/interface.json',
    method: 'GET',
    headers:{
        'accept': '*/*',
        'content-type': "application/atom+xml",
        'accept-encoding': 'gzip, deflate',
        'accept-language': 'en-US,en;q=0.9',
        'authorization': _auth,
        'user-agent': 'nodejs rest client'
    }
};
 
var req = http.request(options, function (res) {
    console.log('STATUS: ' + res.status);
    equal(200, res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
 
    res.on('data',function (chunk) {
         console.log('BODY: ' + chunk);
    });
});
 
req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});
req.end();
```
