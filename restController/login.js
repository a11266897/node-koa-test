const router = require('koa-router')();
const User = require('../models/user').user;
const connetDb = require("../services/connectDb.js");


router.post('/api/login', function *(next) {
	var body,user,
		req = this.response,
		reqBody = this.request.body,
		params = {
	    	userid: reqBody.userid, 
	    	password: reqBody.password
	   	};

   	if(params.userid && params.password){
		yield User.findOne( params, function(err,node) {
			if (!err) {
				body = '{"status":0, "msg":"登录成功！"}';

			} else {
				console.log('error ' + err)
			}
		});
	  // user = new User(params);
	  // yield user.save(function(err){
	  //       if(!err){
	  //           console.log('the new user is saved!');
	  //   		body = '{"status":0, "msg":"success"}';
	  //       }else{
	  //           console.log(err);
	  //           body = '{"status":1, "msg":"'+ err +'"}';
	  //       }
	  //   });
		
	    this.status = 200;
	    this.contentType = "application/json";
	    this.body = body;
   	}
});



module.exports = router;
