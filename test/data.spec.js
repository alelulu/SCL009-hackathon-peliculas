global.window = global;
global.assert = require('chai').assert;
require('../src/logic');
require('./logic.spec.js');

describe('logic.createLink', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof window.logic.createLink, 'function');
  });
});

describe('logic.filterByAge', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof window.logic.filterByAge, 'function');
  });
});


describe('logic.filterByCategory', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof window.logic.filterByCategory, 'function');
  })
});
