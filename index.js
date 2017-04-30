'use strict'

const http = require('http');
const gc = require('idle-gc');
const express = require('express');
const bodyParser = require('body-parser');
const mongoosePaginate = require('mongoose-paginate');
const helmet = require('helmet');

require('app-module-path').addPath(__dirname + '/');


// add modules
const config = require('config');
const mongodb = require('mongodb');
const routes = require('routes');
const app = express();

// 链接数据库
mongodb.connect();

// 翻页全局配置
mongoosePaginate.paginate.options = {
	limit: config.APP.LIMIT
};

// app config
app.set('port', config.APP.PORT);
app.use(helmet());
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

//app routes
routes(app);


// start app
http.createServer(app).listen(app.get('port'), () => {
	gc.start();
    console.log(`fanblog Run！port at ${app.get('port')}`)
});

