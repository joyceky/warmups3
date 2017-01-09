'use strict';

const { plusOneSum } = require('../plusOneSum.js');
const expect = require('chai').expect;

describe("plusOneSum", () => {

  it("accepts only one argument", () => {
    expect(plusOneSum([1, 2, 3, 4])).to.equal(14);
  });

  it("input is an array", () => {
    expect(plusOneSum(8)).to.equal('Only accepts an array');
  });

  it("output is a number", () => {
    expect(plusOneSum([1, 2, 3, 4])).to.be.a('number');
  });
});
