



'use strict';
var msgBox = $('#msgBox');

$('#login').on('click',function(){
	$.ajax({
		url:'/api/login',
		dataType:'json',
		type:'post',
		data:{
			userid : $('#userName').val(),
			password : $('#pwd').val()
		}
	}).done(function( ret ){

		msgBox.html(ret.msg).fadeIn(200).delay(1000).fadeOut(200);
		console.log(ret.status)

		if(!ret.status){
			// window.location.href = 'http://www.baidu.com';
		}
	})
})
