/**
 * 测试的数据模型
 */

const mongoose = require('../mongodb.js').mongoose;

const autoIncrement = require('mongoose-auto-increment');
const mongoosePaginate = require('mongoose-paginate');


// 自增id初始化
autoIncrement.initialize(mongoose.connection);

const BearSchema = new mongoose.Schema({
    //name: String
    // 测试的名字
    name: { type: String },

    // 描述
    description: String,

    // 发布时间
    create_at: { type: Date, default: Date.now() },
    // 最后修改时间
    update_at: { type: Date },

    // // 自定义扩展类型
    // extends: [{
    //     name: { type: String, validate: /\S+/ },
    //     value: { type: String, validate: /\S+/ }
    // }]
});

// 翻页 + 自增ID插件配置
// testSchema.plugin(mongoosePaginate);
BearSchema.plugin(autoIncrement.plugin, {
    model: 'Bear',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});


// 时间更新
// testSchema.pre('findOneAndUpdate', function(next) {
//     this.findOneAndUpdate({}, { update_at: Date.now() });
//     next();
// });

// 标签模型
const Bear = mongoose.model('Bear', BearSchema);

// export
module.exports = Bear;
