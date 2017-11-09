const fs = require('fs')
const Koa = require('koa')
const Router = require('koa-router')
const router = new Router()
const App = new Koa()
const path = require('path')
const LRU = require('lru-cache')
const favicon = require('koa-favicon')
const resolve = file => path.resolve(__dirname, file)
const static = require('koa-static')
const { createBundleRenderer } = require('vue-server-renderer')

const isProd = process.env.NODE_ENV === 'production'

function createRenderer (bundle, options) {
  return createBundleRenderer(bundle, Object.assign(options, {
    // for component caching
    cache: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15
    }),
    // this is only needed when vue-server-renderer is npm-linked
    basedir: resolve('./dist'),
    // recommended for performance
    runInNewContext: false
  }))
}

let renderer
let readyPromise
const templatePath = resolve('./src/index.html')

if (isProd) {  // 生产环境
  const template = fs.readFileSync(templatePath, 'utf-8')  // 读取模板文件
  const bundle = require('./dist/vue-ssr-server-bundle.json')   // 
  const clientManifest = require('./dist/vue-ssr-client-manifest.json')
  renderer = createRenderer (bundle, {
    template,
    clientManifest
  })
} else {
  // 使用热更新
  readyPromise = require('./build/setup-dev-server')( 
    App,
    templatePath,
    (bundle, options) => {
      renderer = createRenderer(bundle, options)
    }
  )
}

async function render (ctx, next) {
  let context = {url: ctx.url}
  let html = await new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => {
      if (err) {
        reject('404')
      } else {
        resolve(html)
      }
    })
  })
  ctx.body = html
}

App.use(static('./dist'))
// App.use(static('./public'))
App.use(favicon('./public/icon.png'))

router.get('*', isProd ? render : async (ctx, next) => {
  ctx.set('Content-Type', 'text/html')
  await readyPromise.then(() => render(ctx, next))
})

App.use(router.routes()).use(router.allowedMethods())

App.listen(3000, () => {
  console.log(`服务已经开启，端口号为：3000`)
})