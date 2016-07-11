/**
 *  使用第三方插件mongoose连接数据库
 *  dependencies : mongoose;
 */

const conf = require('../config');
const mongoose = require('mongoose');

mongoose.connect( conf.db );

mongoose.connection.on('connected',function(){
    console.log('mongoose connectd to '+ conf.db);
})
mongoose.connection.on('error',function( error ){
    console.log('mongoose connection error '+ error);
})
mongoose.connection.on('disconnected',function( error ){
    console.log('mongoose disconnected');
})


module.exports = mongoose;