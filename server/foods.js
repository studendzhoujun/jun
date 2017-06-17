/*
 * @Author: zhouJun 
 * @Date: 2017-05-26 14:02:48 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2017-05-27 15:58:32
 */
const express =require('express');
const router =express.Router();
const logger = require('morgan');
router.use(function(req,res,next){
     console.log('time:',Date.now());
     next();
})
router.use(logger('dev'));
router.get('/',function(req,res){
    res.send('foods home page');
});

router.get('/about',function(req,res){
    res.send('about foods');
})
//router.get('/apple',function(req,res){
  //  res.send('this is a apple');
//})
module.exports=router;
