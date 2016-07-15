var should = require('chai').should();
var Vector = require('../dist/jsvector.js').Vector;

describe('jsvector', function() {
  describe('Vector()', function() {
    var v;

    beforeEach(function() {
      v = new Vector();
    });

    it('Should return an empty array', function() {
      v.length.should.equal(0);
    });

    it('Should return a new object', function() {
      v.should.be.an.instanceof(Vector);
    });

    it('Should return an Array', function() {
      v.should.be.an.instanceof(Vector);
    });
  });
});
