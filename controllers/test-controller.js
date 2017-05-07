const Bear = require('../models/test-model.js');
const { handleRequest, handleSuccess , handleError } = require('../utils/handle.js');


console.log(handleRequest.toString());

const testCtrl = { list: {}, item: {}};
const config = require('../config.js');

// 新增一条测试数据
testCtrl.list.POST = ({ body: test}, res) => {
	// 保存测试数据
	const saveTest = () => {
		new Bear(test).save()
		.then((result = test) => {
			handleSuccess({
				res,
				message: '测试成功',
				result
			});
			console.log(result);
		})
		.catch((err) => {
			handleError({
				res,
				err,
				message: '测试失败'
			})
		});
	}
	saveTest();
}
// 批量删除测试数据
testCtrl.list.DELETE = ({ body: { ids }} ,res) => {
	//简单验证下。
	if(!ids || !ids.length ){
		handleError({
			res,
			message: '却少参数'
		});
		return false;
	}

	const deleteTest = () => {
		Bear.remove({ '_id' : { $in : ids}})
		.then(result => {
			handleSuccess({
				res,
				result,
				message: '批量删除测试数据成功'
			});
		})
		.catch((err) => {
			handleError({
				res,
				err,
				message: '批量删除测试数据失败'
			})
		});
	}

	Bear.find({ '_id' : { $in : ids }})
	.then((tests)=> {
		if(!tests && !tests.length ){
			console.log(tests);
			deleteTest();
		}
	})
	.catch((err) => {
		console.log(err);
		deleteTest();
	});
}
// 删除单条测试数据
testCtrl.item.DELETE = ({ params: { id }}, res) => {
	Bear.findByIdAndRemove(id)
	.then(result => {
		handleSuccess({
			res,
			result,
			message: '删除单条成功了'
		})
	})
	.catch(err => {
		handleError({
			res,
			message: '删除失败了',
			err
		});
	});
};
// 查询测试数据
testCtrl.list.GET = (req, res) => {

	// 查询的参数
	let { page, page_size } = req.query;

	let options = {
		
		page: Number(page || 1),

		limit : Number(page_size || 10)
	};

	let querys = {};

	const getAllData = () => {
		Bear.paginate(querys, options)
		.then((tests) => {	
			handleSuccess({
				res,
				message: '测试成功',
				result: {
					pagination: {
						
					},
					data: tests.docs
				}
			})
		})
		.catch((err) => {
			handleError({
				res,
				err,
				message: '测试失败'
			});
		});
	}
	getAllData();
    //queryAll();
}

exports.item = (req, res) => {
	handleRequest({ req, res, controller: testCtrl.item });
};

exports.list = (req, res) => { 
	handleRequest({ req, res, controller: testCtrl.list })
};
