const Koa = require('koa')
const app = new Koa()
const koaRouter = require('koa-router')()
const json = require('koa-json')
const logger = require('koa-logger')
const bodyparser = require('koa-bodyparser')

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
// koaRouter.use('/movies', movies.routes())

// app.use(koaRouter.routes())

app.listen(3000, () => {
  console.log('Koa is listening in 3000')
})

module.exports = app
