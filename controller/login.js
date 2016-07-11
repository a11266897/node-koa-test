const ejs = require('koa-ejs');
const router = require('koa-router')();


const conf = require('../config.js');

// ejs(app, {
// 	root: conf.views,
// 	layout: 'login',
// 	viewExt: 'html',
// 	cache: false,
// 	debug: true
// });

// 用router获取request并替换模板标签
router.get('/login.html', function *(next) {
	yield this.render('login', {
		title: '登录',
		keywords: '收银台'
	});
});

module.exports = router;