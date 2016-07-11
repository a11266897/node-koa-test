const koa = require('koa');
const serve = require('koa-static');
const ejs = require('koa-ejs');
const logger = require('koa-logger');
const router = require('koa-router')();
const bodyParser = require('koa-body-parser');
const app = koa();
const conf = require('./config');


const loginApi = require('./restController/login');
const login = require('./controller/login');


// 配置静态资源服务目录地址
app.use(serve('.'));

// 配置ejs获取login模板
// 问题：为毛这段代码无法挪到controller里面

ejs(app, {
	root: conf.views,
	layout: 'login',
	viewExt: 'html',
	cache: false,
	debug: true
});


// 渲染登陆页面
app.use(login.routes());

//调用post body 获取
app.use(bodyParser());

// 调用登陆接口
app.use(loginApi.routes());


app.use(logger());

app.on('error', function(err, ctx){
  	log.error('server error', err, ctx);
});

app.listen(3000);











