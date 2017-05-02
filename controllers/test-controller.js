const Bear = require('../models/test-model.js');
const { handleRequest, handleSuccess , handleError } = require('../utils/handle.js');


console.log(handleRequest.toString());

const testCtrl = { list: {}, item: {}};
const config = require('../config.js');

testCtrl.list.POST = ({ body: test}) => {

	console.log(test);
	// 保存测试数据
	// const saveTest = () => {
	// 	new Test(test).save()
	// 	.then((result = test) => {
	// 		handleSuccess({
	// 			res,
	// 			result,
	// 			message: '测试成功'
	// 		})
	// 	})
	// 	.catch((err) => {
	// 		handleError({
	// 			res,
	// 			err,
	// 			message: '测试失败'
	// 		})
	// 	});
	// }
	// saveTest();
}

testCtrl.list.GET = (req, res) => {
	const queryAll = () => {

		handleSuccess({
			res,
			result,
			message: '测试成功'
		})
	}
}



exports.list = (req, res) => { 
	console.log(1111);
	handleRequest({ req, res, controller: testCtrl.list })
};
