'use strict'

const pu = require('./index.js');

async function main(){
	console.log("before await sleep:", Date.now()); 
	await  pu.sleep(3000)
	console.log("main done:", Date.now());
}
main();