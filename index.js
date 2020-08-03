'use strict'

  
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, ms);
    })
}
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

async function sleepUntil(time) {
    let cur = Date.now()
    if(cur >= time) {
        return
    } else {
        return sleep(cur-time)
    }
}


exports.promisefy = promisefy;

exports.sleep = sleep;