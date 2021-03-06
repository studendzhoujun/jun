/*
 * @Author: zhouJun 
 * @Date: 2017-05-26 10:38:10 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2018-08-24 14:25:50
 */
const express = require('express');
const app = express();
const path = require('path');
const fs= require('fs')
const logger = require('morgan');
const methodOverride = require('method-override');

const errorHandler = require('errorhandler');

const compression = require('compression');

const foods=require('../router/foods.js');
const opn=require('opn');
app.use('/foods',foods);
const opts = {
    "port": 3000,
    "message":'hello everyone !!'
}
// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });
app.use(compression());
app.use(logger('dev'));
app.use(methodOverride());
app.use(errorHandler());
app.set('port', process.env.PORT || opts.port);
app.use(express.query());

// app.use(express.static('static'));
app.use(express.static(path.join(__dirname,'../','static')));
app.get('/', function (req, res) {
    res.send(opts.message);
});
//combo
app.get('*??',function(req,res,next){
    console.log(req.url);
    let url=req.url.replace(/(\w+|\/)+/,'').replace(/\?\?/,'');
    console.log(url);
    res.send('ok');
})
//路由句柄
app.get('/fg',function(req,res,next){
    console.log('response will be sent the next function ...');
    next();
},function(req,res){
   res.send('from next function')
});
//error handle
app.use(function(err,req,res,next){
    console.log(err.stack);
    res.status(500).send('somethting broke');
    next();
})
//404
app.use(function(req,res,next){
    res.status(404).send('sorry can not find that');
    next();
});
app.listen(app.get('port'), function() {
    opn('http://localhost:3000/')
  return console.log("try Express run at " + app.get('env') + " listening on port" + app.get('port'));
});
