/*
 * @Author: zhouJun 
 * @Date: 2017-05-26 14:02:48 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2017-05-26 14:06:41
 */
const express =require('express');
const router =express.Router();

router.use(function(req,res,next){
     console.log('time:',Date.now());
     next();
})

router.get('/',function(req,res){
    res.send('foods home page');
});

router.get('/about',function(req,res){
    res.send('about foods');
})

module.exports=router;