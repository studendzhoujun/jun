'use strict'

const fs = require('fs')
const path = require('path')
const LRU = require('lru-cache')
const Cookies = require('universal-cookie')
const { createBundleRenderer } = require('vue-server-renderer')

const resolve = file => path.resolve(__dirname, file)
const isProd = process.env.NODE_ENV === 'production'
const templatePath = resolve('../views/index.html')

function createRenderer (bundle, options) {
  return createBundleRenderer(bundle, Object.assign(options, {
    cache: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15
    }),
    // this is only needed when vue-server-renderer is npm-linked
    basedir: resolve('../dist'),
    // recommended for performance
    runInNewContext: false
  }))
}

module.exports = class ViewMiddleware {
  static render (app) {
    let renderer, readyPromise
    readyPromise = require('../build/setup-dev-server')(app, templatePath, (bundle, options) => {
        renderer = createRenderer(bundle, options)
      })

    function getHTML (context) {
      return new Promise((resolve, reject) => {
        const cb = (error, html) => {
          if (error) return reject(error)
          resolve(html)
        }
        readyPromise.then(() => renderer.renderToString(context, cb))
      })
    }

    return async function (ctx) {
      const context = {
        url: ctx.url,
        cookies: new Cookies(ctx.headers.cookie)
      }

      try {
        ctx.set('Content-Type', 'text/html')
        ctx.body = await getHTML(context)
        // ctx.body='<h1>hello</h1>'
      } catch (error) {
        ctx.body='404 page not found'
      }
    }
  }
}
