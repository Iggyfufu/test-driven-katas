const twoSum = require('./twoSum');
const { expect } = require('chai');


describe('Returns an array of indices that will sum to the target', () => {
    it('it returns an array', () => {
        expect(twoSum([], 5)).to.deep.equal([]);
    });
    it('it returns an empty array', () => {
        expect(twoSum([], 5)).to.deep.equal([]);
    });
    it('it returns an array with indices', () => {
        expect(twoSum([1, 2, 3], 5)).to.deep.equal([1, 2]);
    })
});