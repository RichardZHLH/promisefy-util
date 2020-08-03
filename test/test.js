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
})