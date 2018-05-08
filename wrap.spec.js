const wrap = require('./wrap');
const { expect } = require('chai');

describe('wrap', () => {
    it('returns empty string if input is empty string', () => {
        expect(wrap("",10)).to.equal("");
    });
    it('returns string', () => {
        expect(wrap("hello", 100)).to.equal("hello")
    });
    it('returns wrapped string', () => {
        expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20))
        .to.equal("Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.");
    });
});