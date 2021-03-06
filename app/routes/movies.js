const movies = require('../controller/movies.js')
const router = require('koa-router')()

router.options('/api/*', ctx => {
  ctx.writeHead(200, 'ok', {
    Allow: 'GET, POST, PUT, OPTIONS'
  })
})

router.get('/movies/:page', movies.getMoviesList)
module.exports = router
