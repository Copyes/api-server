/**
 * 路由管理
 */

const config = require('config');
const controllers = require('./controllers/index.js');

const routes = app => {

	// app.get('/', (req, res) => {
	// 	res.json(config.INFO)
 //         //res.jsonp(config.INFO);
 //    });
    // 拦截器
    app.all('*', (req, res, next) => {

    	res.header('Access-Control-Allow-Headers', 'Authorization, Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With');
        res.header('Access-Control-Allow-Methods', 'PUT,PATCH,POST,GET,DELETE,OPTIONS');
        res.header('Access-Control-Max-Age', '1728000');
        res.header('Content-Type', 'application/json;charset=utf-8');
        res.header('X-Powered-By', 'Nodepress 1.0.0');

        // OPTIONS
        if (req.method == 'OPTIONS') {
            res.sendStatus(200);
            return false;
        }

        

    });
    // Api
    app.get('/', (req, res) => {
        res.json(config.INFO);
    });
    // Test
    app.all('/test', controllers.test.list);
    
     //    // set header
     //    const allowOrigins = ['http://120.24.83.35', 'http://127.0.0.1', 'http://localhost'];

     //    const origin = req.headers.origin || '';

     //    if (allowOrigins.includes(origin) || origin.includes('localhost')) {
     //        res.setHeader('Access-Control-Allow-Origin', origin);
     //    }

        

        

        // // 如果是生产环境，需要验证用户来源渠道，防止非正常请求
        // if (Object.is(process.env.NODE_ENV, 'production')) {
        //     const { origin, referer } = req.headers;
        //     const originVerified = (!origin || origin.includes('localhost')) &&
        //         (!referer || referer.includes('localhost'))
        //     if (!originVerified) {
        //         res.status(403).jsonp({ code: 0, message: '来者何人！' })
        //         return false;
        //     }
        // }


        // 排除auth的post请求 && 评论的post请求 && like请求
        // const isLike = Object.is(req.url, '/like') && Object.is(req.method, 'POST');
        // const isPostAuth = Object.is(req.url, '/auth') && Object.is(req.method, 'POST');
        // const isPostComment = Object.is(req.url, '/comment') && Object.is(req.method, 'POST');
        // if (isLike || isPostAuth || isPostComment) {
        //     next();
        //     return false;
        // };

        // // 拦截所有非管路员的非get请求
        // if (!authIsVerified(req) && !Object.is(req.method, 'GET')) {
        //     res.status(401).jsonp({ code: 0, message: '来者何人！' })
        //     return false;
        // };

        

        // Tag
        // app.all('/tag', controllers.tag.list);
        // app.all('/tag/:tag_id', controllers.tag.item);

        // // Category
        // app.all('/category', controllers.category.list);
        // app.all('/category/:category_id', controllers.category.item);

        // // 评论
        // app.all('/comment', controllers.comment.list);
        // app.all('/comment/:comment_id', controllers.comment.item);

        // // Article
        // app.all('/article', controllers.article.list);
        // app.all('/article/:article_id', controllers.article.item);

        // 404
        // app.all('*', (req, res) => {
        //     res.status(404).jsonp({
        //         code: 0,
        //         message: '无效的API请求'
        //     })
        // });
}

module.exports = routes;





