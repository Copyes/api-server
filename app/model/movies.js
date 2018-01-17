const db = require('../../config/db.js')
const moviesModel = '../schema/movies.js'

// 引入数据库
const TodoListDb = db.TodoList
// 引入表结构
const Movies = TodoListDb.import(moviesModel)

// 获取电影列表
const getMoviesList = function*(page) {
  let pageSize = 20

  return (movies = yield Movies.findAll({
    order: 'movie_score DESC',
    limit: pageSize,
    offset: pageSize * (page - 1)
  }))
}

module.exports = {
  getMoviesList
}
