const calc = require('../test_practice_1').default;

describe("case1",()=>{
    it("t1",()=>{
        const p = calc(100,1000,100);
        expect(p).toBe(1100);
    })
})