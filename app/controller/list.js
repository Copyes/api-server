const listModel = require('../model/list')

class ListController {
  async getAllTodo(ctx) {
    let todos = await listModel.getTodoList()
    if (todos && todos.length > 0) {
      ctx.body = todos
      ctx.status = 200
    } else {
      ctx.body = '不知道哪里错了'
      ctx.status = 500
    }
  }
  async getTodoItem(ctx) {
    let id = ctx.params.id
    let todo = await listModel.getTodoItem(id)

    if (todo) {
      ctx.body = todo
      ctx.status = 200
    } else {
      ctx.body = '你要找的不存在'
    }
  }
}

module.exports = new ListController()
