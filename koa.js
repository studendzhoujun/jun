/*
 * @Author: zhouJun 
 * @Date: 2018-08-24 15:14:09 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2018-08-24 15:58:46
 */

const Koa = require('koa');
const app = new Koa();
const favicon = require('koa-favicon')
const path = require('path')
const cors = require('@koa/cors')

const util =require('./util')
const middleware = require('./middlewares')
// app.use(favicon(path.join(__dirname,'/static/img/txx.png')));
util.getName()
app.use(middleware.ipFilter)
app.use(middleware.util)
app.use(cors({ credentials: true, maxAge: 2592000 }))

app.use(async(ctx,next)=>{
    console.log(`${ctx.request.method}--${ctx.request.url}`)
    await next();
})

app.use(async(ctx,next)=>{
    const start =new Date().getTime();
    await next();
    const ms = new Date().getTime()-start
    console.log(`time:${ms}ms`)
})
// app.use(async (ctx,next)=>{
//     await next();
//     ctx.response.type='text/html';
//     ctx.response.body='<h2>hello,koa</h2>'
//     console.log(`response end`)
// })
app.use(require('./middlewares/view').render(app))
app.listen(3000)
console.log('app startde at 3000 port..')