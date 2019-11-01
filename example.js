'use strict'

const pf = require('./index.js');

async function wrapSleep(ms,cb) {
	return await pf.sleep(ms,cb)
}

async function main(){
	pf.sleep(2000,  ()=>{console.log("this is cb")});
	console.log(" before await sleep"); await  pf.sleep(3000)
	console.log("main done");
}
main();