'use strict'

const pf = require('./index.js');

function func(para, _cb) {
	setTimeout(()=>{
		let err = null;
		let result = para*2;
		_cb(err, result);		
	}, para);
}
function func4(para, _cb) {
	setTimeout(()=>{
		let err = null;
		let result = para*4;
		_cb(err, result);		
	}, 4000);
}
function func3(para, _cb) {
	setTimeout(()=>{
		let err = null;
		let result = para*3;
		_cb(err, result);		
	}, 3000);
}
function exam1() {
	func(100, (err, result)=>{
		console.log("err: ", err);
		console.log("result: ", result);
	});
	console.log("exam1 done");
}
async function exam1_pf() {
	let ret;
	try {
		ret = await pf.promisefy(func, [100]);
	}catch(err){
		console.log("exam1_pf err: ", err);
		return;
	}
	
	console.log("ret: ", ret);
	console.log("exam1_pf done");
}

function exam2() {
	let v = [2000, 3000, 1000];
	v.forEach((item)=>{
		func(item, (err, result)=>{
			console.log("err: ", err);
			console.log("result: ", result);
		});
	})
	console.log("exam2 done");
}
async function exam2_pf() {
	let v = [2000, 3000, 1000];
	let ps = v.map(function(item, index){
		return pf.promisefy(func, [item]);
	})	
	let ret = await Promise.all(ps);
	console.log("ret: ", ret);
	console.log("exam2_pf done");
}

async function main(){
	await exam1_pf();
	await pf.sleep(1000);
	await exam2_pf();
	console.log("main done");
}
main();