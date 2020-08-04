'use strict'

const assert = require('assert');
const pu = require('../index.js')


describe('promisefy test', ()=>{
    it('sleep', async ()=>{
        let cur = Date.now();
        await pu.sleep(1000)
        let now = Date.now();
        assert.equal(Math.round(cur/1000)+1, Math.round(now/1000), "sleep failed")
    })
    it('sleepUntil', async ()=>{
        let cur = Date.now();
        console.log("cur:", cur);
        let until = cur + 3000;
        await pu.sleepUntil(until);
        let now = Date.now();
        console.log("now:", now);
        assert.equal(Math.round(cur/1000)+3, Math.round(now/1000), "sleepUntil failed")
        console.log("sleep until:", await pu.sleepUntil(until))
    })
})