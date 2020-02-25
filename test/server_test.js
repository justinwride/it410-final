const expect = require('chai').expect;

describe('Make sure the server works', () => {
    var x = 10
    before(() => {
        x = 5;
    });
    // tests go here
    it('adds numbers', () => {
        expect(1 + 1).to.equal(2)
    });
    it('does not add numbers incorrectly', () => {
        expect(1 + 2).not.to.equal(2);
    });
    it('correct variable', () => {
        expect(x).to.equal(5);
    });
});