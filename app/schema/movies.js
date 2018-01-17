/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'movies',
    {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      movie_name: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      movie_poster: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      movie_score: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      movie_comment: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
      movie_desc: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      movie_info: {
        type: DataTypes.STRING(255),
        allowNull: true
      }
    },
    {
      tableName: 'movies'
    }
  )
}
