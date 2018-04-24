var should = require('should');

describe('Test is Running', function() {
    it('is running', function() {
        true.should.equal(true);
    });
});

describe('Array of Images', function() {
  it('Array Exists', function() {
    let array = []
    let type = typeof array
    type.should.equal("object")
  })

  it('Array Length Should Be Longer Than Zero', function() {
    let array = ["Image 1", "Image 2", "Image 3"]
    array.length.should > 0
  })
})
