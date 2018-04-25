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

  it('Each Image Should Have a URL As A String', function() {
    let imageObject = {image_id: 123, image_url: "imageURL"}
    let type = typeof imageObject["image_url"]
    type.should.equal("string")
  })

  it('Each Image Should Have A ID', function() {
    let imageObject = {image_id: 123, image_url: "imageURL"}
    let status
    if (typeof imageObject["image_id"] !== "undefined" && imageObject["image_id"] !== null) {
      status = true
    } else {
      status = false
    }
    status.should.equal(true)
  })

  it('Image IDs Can Not Be Null', function() {
    let imageObject = {image_id: null, image_url: "imageURL"}
    let status
    if (typeof imageObject["image_id"] !== "undefined" && imageObject["image_id"] !== null) {
      status = true
    } else {
      status = false
    }
    status.should.equal(false)
  })

  it('Each Image ID Should Be A Number', function() {
    let imageObject = {image_id: 123, image_url: "imageURL"}
    let status
    if (typeof imageObject["image_id"] === "number") {
      status = true
    } else {
      status = false
    }
    status.should.equal(true)
  })
})
