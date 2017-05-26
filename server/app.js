/*
 * @Author: zhouJun 
 * @Date: 2017-05-26 10:38:10 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2017-05-26 10:46:59
 */
const express = require('express');
const app = express();
const path = require('path');
const fs= require('fs')
const morgan = require('morgan');
const methodOverride = require('method-override');

const errorHandler = require('errorhandler');

const compression = require('compression');

const opts = {
    "port": 3000,
    "message":'hello everyone'
}
// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });
app.use(compression());
app.use(morgan('dev'));
app.use(methodOverride());
app.use(errorHandler());
app.set('port', process.env.PORT || opts.port);
app.use(express.query());


app.get('/', function (req, res) {
    res.send(opts.message);
});
//error handle
app.use(function(err,req,res,next){
    console.log(err.stack);
    res.status(500).send('somethting broke')
})
//404
app.use(function(req,res,next){
    res.status(404).send('sorry can not find that')
});
app.listen(app.get('port'), function() {
  return console.log("try Express run at " + app.get('env') + " listening on port" + app.get('port'));
});