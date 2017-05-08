/**
 * 文章模型
 */

const mongoose = require('../mongodb.js').mongoose;
const autoIncrement = require('mongoose-auto-increment');
const mongoosePaginate = require('mongoose-paginate');


// 自增id初始化
autoIncrement.initialize(mongoose.connection);

// 文章模型
const articleSchema = new mongoose.Schema({
	
});