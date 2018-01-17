const router = require('koa-router')()
const movies = require('./movies')
const todos = require('./list')

router.use('/api', movies.routes())
router.use('/api', todos.routes())

module.exports = router
