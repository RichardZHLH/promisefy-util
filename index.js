'use strict'

  
function sleep(ms) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve();
		}, ms);
	})
};
function promisefy(func, paras=[], obj=null){
    return new Promise(function(success, fail){
        function _cb(err, result){
            if(err){
                fail(err);
            } else {
                success(result);
            }
        }
        paras.push(_cb);
        func.apply(obj, paras);
    });
}
exports.promisefy = promisefy;
exports.sleep = sleep;