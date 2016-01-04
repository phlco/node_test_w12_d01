var calc = require('../calculator/calculator.js');

describe('calc', function(){
  it('adds two numbers', function(){
    expect( calc.add(5,4) ).toEqual(9);
  });
  it('subtracts two numbers', function(){
    expect( calc.subtract(5,4) ).toEqual(1);
  });
  it('divides two numbers', function(){
    expect( calc.divide(20, 4) ).toEqual(5);
  });
  it('multiplies two numbers', function(){
    expect( calc.multiply(5,4) ).toEqual(20);
  });
})
