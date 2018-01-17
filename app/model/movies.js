const db = require('../../config/db.js')
const moviesModel = '../schema/movies.js'
// 引入数据库
const TodoListDb = db.TodoList
// 引入表结构
const Movies = TodoListDb.import(moviesModel)

class MoviesModel {
  constructor() {
    this.pageSize = 20
  }
  async getMoviesList(page) {
    const movies = await Movies.findAll({
      order: [['movie_score', 'ASC']],
      limit: this.pageSize,
      offset: this.pageSize * (page - 1)
    })
    return movies
  }
}
module.exports = new MoviesModel()
