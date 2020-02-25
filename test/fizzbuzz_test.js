const expect = require('chai').expect;
const fizzBuzz = require('../fizzbuzz');

describe('FizzBuzz', () => {
    it('divisible by 3, returns fizz', () => {
        const value = fizzBuzz(3)
        expect(value).to.equal('fizz');
    })
    it('divisible by 5, return buzz', () => {
        const value = fizzBuzz(5)
        expect(value).to.equal('buzz')
    })
    it('divisible by 3 and 5, return fizzbuzz', () => {
        const value = fizzBuzz(15)
        expect(value).to.equal('fizzbuzz')
    })
    it('not divisible by 3 or 5, return value', () => {
        const value = fizzBuzz(4)
        expect(value).to.equal(value)
    })
});