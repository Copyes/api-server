const db = require('../../config/db.js')
const listModel = '../schema/list.js'
// 引入数据库
const TodoListDb = db.TodoList
// 引入表结构
const List = TodoListDb.import(listModel)

class ListModel {
  async getTodoList() {
    const list = await List.findAll()
    return list
  }
  async getTodoItem(id) {
    const todoItem = await List.findOne({
      where: {
        id: id
      }
    })
    return todoItem
  }
}
module.exports = new ListModel()
