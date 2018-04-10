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
function promiseEvent(func, paras=[], obj=null, event){
    return new Promise(function(success, fail){
        let res = func.apply(obj, paras);
        obj.on(event, function _cb(err){
            if(err){
                fail(err);
            } else {
                success(res);
            }
        })
    });
}

exports.promiseEvent = promiseEvent;
exports.promisefy = promisefy;

exports.sleep = sleep;