const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

// 处理koa的post请求确保获取数据
import bodyParser from 'koa-bodyparser'
// 导入各个接口模块
import {category,label} from './interface/index'

const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

app.use(bodyParser({
  extendTypes:['json','from','text']
}))

async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  // 配置路由
  app.use(category.routes()).use(category.allowedMethods())
    .use(label.routes()).use(label.allowedMethods())

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })



  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
