const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const logger = require('koa-logger')
const bodyparser = require('koa-bodyparser')

const router = require('./app/routes/index')

app.use(bodyparser())
app.use(json())
app.use(logger())

app.use(async (ctx, next) => {
  let start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log('%s %s - %s', ctx.method, ctx.url, ms)
})

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    if (401 == err.status) {
      ctx.status = 401
      ctx.body = {
        success: false,
        token: null,
        message: 'Protected resource, use Authorization header to get access'
      }
    } else {
      throw err
    }
  }
})
app.use(router.routes())

app.on('error', (err, ctx) => {
  console.log('server error', err)
})
app.listen(3000, () => {
  console.log('Koa is listening in 3000')
})

module.exports = app
