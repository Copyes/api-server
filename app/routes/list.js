const list = require('../controller/list')
const router = require('koa-router')()

router.options('/api/*', ctx => {
  ctx.writeHead(200, 'ok', {
    Allow: 'GET, POST, PUT, OPTIONS'
  })
})

router.get('/todos', list.getAllTodo)
router.get('/todos/:id', list.getTodoItem)
module.exports = router
