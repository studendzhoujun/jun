/*
 * @Author: zhouJun 
 * @Date: 2018-08-24 15:13:57 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2018-08-24 15:32:04
 */

const codeMap = {
    '-1': 'fail',
    '200': 'success',
    '401': 'token expired',
    '500': 'server error',
    '10001': 'params error'
  }
  
  const utilFn = {
    resuccess (data) {
      return {
        code: 200,
        success: true,
        message: codeMap['200'],
        data: data || null
      }
    },
    refail (message, code, data) {
      return {
        code: code || -1,
        success: false,
        message: message || codeMap[code],
        data: data || null
      }
    }
  }
class Middleware {
    static util(ctx,next){
        ctx.set('X-Request-Id', ctx.id)
        ctx.util = utilFn
        return next()
    }
    static ipFilter(ctx,next){
        console.log(`ip:${ctx.ip}`)
        return next()
    }
}
module.exports=Middleware
