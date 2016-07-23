var should = require('chai').should();
var Vector = require('../dist/jsvector.js').Vector;

describe('jsvector', function() {

  var v;

  describe('Vector() Constructor', function() {

    beforeEach(function() {
      v = new Vector();
    });

    it('Vector() should return an empty array', function() {
      v.length.should.equal(0);
    });

    it('Vector(val) Should return a Vector of specified length initialized to zero', function() {
      v = new Vector(5);
      v.length.should.eql(5);
      v.forEach(val => val.should.eql(0));
    });

    it('Should return a new object', function() {
      v.should.be.an.instanceof(Vector);
    });

    it('Should return an Array', function() {
      v.should.be.an.instanceof(Vector);
    });

    it('Should have of() method', function() {
      var nv = Vector.of(1, 2, 3);
      nv.should.be.an.instanceof(Vector);
      nv.length.should.equal(3);
    });

    it('Should have from() method', function() {
      v = Vector.from([1, 2, 3], x => x + x);
      v.should.be.an.instanceof(Vector);
      v.length.should.equal(3);
      v[0].should.eql(2);
    });
  });

  describe('methods', function() {
    beforeEach(function() {
      v = Vector.of(1, 2, 3);
      w = Vector.of(2, 3, 4);
    });

    it('should have a method to check Vector equality', function() {
      w = v.isEqual([1, 2, 3]);
      w.should.be.true;
      w = v.isEqual([2, 3, 4]);
      w.should.be.false;
    });

    it('should have an elementwise equality check', function() {
      v.elIsEqual([1, 4, 3]).isEqual([true, false, true]).should.be.true;
    });

    it('should add two vectors', function() {
      v = v.plus(w);
      v.isEqual([3, 5, 7]).should.be.true;
      v.should.be.an.instanceof(Vector);
    });

    it('should subtract two vectors', function() {
      v = v.minus(w);
      v.isEqual([-1, -1, -1]).should.be.true;
      v.should.be.an.instanceof(Vector);
    });
  });
});
