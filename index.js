'use strict'

const http = require('http');
const gc = require('idle-gc');
const express = require('express');
const bodyParser = require('body-parser');
const mongoosePaginate = require('mongoose-paginate');
const helmet = require('helmet');
require('app-module-path').addPath(__dirname + '/');

const Bear = require('./models/test-model.js');

// add modules
const config = require('./config.js');
const mongodb = require('./mongodb.js');
const routes = require('./routes.js');
const app = express();
const router = express.Router();

// // 链接数据库
mongodb.connect();

// 翻页全局配置
// mongoosePaginate.paginate.options = {
// 	limit: config.APP.LIMIT
// };

// app config
app.set('port', config.APP.PORT);
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// 任何路由的每次request都执行
// router.use((req, res, next) => {
//     // 打印
//     console.log('Something is happening.');
//     next(); // 在这里会将request交给下一个中间件，如果这个中间件后面没有其他中间件，请求会交给匹配的路由作处理
// });

//app routes
// router.get('/' , (req, res) => {
// 	res.json({message: '成功访问了'})
// });

// router.route('/bear')

//     .post(function(req, res) {
        
//         var bear = new Bear();  
//         bear.name = req.body.name;  

//         bear.save(function(err) {
//             if (err){
//                 res.send(err);
//             }else{
// 	            res.json({ message: 'bear created!' });
//             }
//         });
        
//     })
//     .get(function(req, res) {
//         Bear.find(function(err, bears) {
//             if (err){
//                 res.send(err);
//             }else{
//             	res.json(bears);
//             }
//         });
//     });


//app.use('/api', router);
routes(app);

// start app
http.createServer(app).listen(app.get('port'), () => {
	gc.start();
    console.log(`fanblog Run！port at ${app.get('port')}`)
});

