# promisefy-util
Convert function with callback to promise

## common function with callback

	function func(para, _cb) {
		setTimeout(()=>{
			let err = null;
			let result = para*2;
			_cb(err, result);		
		}, para);
	}

## convert to promise

	let ret;
	try {
		ret = await pf.promisefy(func, [100]);
	}catch(err){
		console.log("Err: ", err);
		return;
	}
  
## array forEach with promise

	let v = [2000, 3000, 1000];
	let ps = v.map(function(item, index){
		return pf.promisefy(func, [item]);
	})	
	let ret = await Promise.all(ps);
	console.log("ret: ", ret);



