const moviesModel = require('../model/movies')

class MoviesController {
  async getMoviesList(ctx) {
    let page = ctx.params.page
    console.log(page)
    const moviesList = await moviesModel.getMoviesList(page)
    if (moviesList && moviesList.length >= 0) {
      ctx.body = moviesList
      ctx.status = 200
    } else {
      ctx.body = '不知道哪里出错了！'
      ctx.status = 500
    }
  }
}
module.exports = new MoviesController()
