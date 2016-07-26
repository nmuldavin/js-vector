require('chai').should();
const Vector = require('../dist/jsvector.js').Vector;

describe('jsvector', () => {
  let v;

  describe('Vector() Constructor', () => {
    beforeEach(() => {
      v = new Vector();
    });

    it('Vector() should return an empty array', () => {
      v.length.should.equal(0);
    });

    it('Vector(val) Should return a Vector of specified length initialized to zero', () => {
      v = new Vector(5);
      v.length.should.eql(5);
      v.forEach(val => val.should.eql(0));
    });

    it('Should return a new object', () => {
      v.should.be.an.instanceof(Vector);
    });

    it('Should return an Array', () => {
      v.should.be.an.instanceof(Vector);
    });

    it('Should have of() method', () => {
      const nv = Vector.of(1, 2, 3);
      nv.should.be.an.instanceof(Vector);
      nv.length.should.equal(3);
    });

    it('Should have from() method', () => {
      v = Vector.from([1, 2, 3], x => x + x);
      v.should.be.an.instanceof(Vector);
      v.length.should.equal(3);
      v[0].should.eql(2);
    });
  });

  describe('methods', () => {
    let w;
    let x;
    let y;

    beforeEach(() => {
      v = Vector.of(1, 2, 3);
      w = Vector.of(2, 3, 4);
      x = null;
      y = Vector.of(5, 10, 15);
    });

    it('should have a method to check Vector equality', () => {
      w = v.isEqual([1, 2, 3]);
      w.should.be.true;
      w = v.isEqual([2, 3, 4]);
      w.should.be.false;
    });

    it('should have an elementwise equality check', () => {
      v.elIsEqual([1, 4, 3]).isEqual([1, 0, 1]).should.be.true;
    });

    it('should have an addition method', () => {
      x = v.plus(w);
      x.isEqual([3, 5, 7]).should.be.true;
      x.should.be.an.instanceof(Vector);
    });

    it('should have an addition assignment method', () => {
      v.plusEq(w);
      v.isEqual([3, 5, 7]).should.be.true;
      v.should.be.an.instanceof(Vector);
    });

    it('should have a subtraction method', () => {
      x = v.minus(w);
      x.isEqual([-1, -1, -1]).should.be.true;
      x.should.be.an.instanceof(Vector);
    });

    it('should have a subtraction assignment method', () => {
      v.minusEq(w);
      v.isEqual([-1, -1, -1]).should.be.true;
      v.should.be.an.instanceof(Vector);
    });

    it('should have a scalar multiplication method', () => {
      x = v.times(5);
      x.isEqual([5, 10, 15]).should.be.true;
      x.should.be.an.instanceof(Vector);
    });

    it('should have a scalar multiplication assignment method', () => {
      v.timesEq(5);
      v.isEqual([5, 10, 15]).should.be.true;
      v.should.be.an.instanceof(Vector);
    });

    it('should have a scalar division method', () => {
      x = y.dividedBy(5);
      x.isEqual(v).should.be.true;
      x.should.be.an.instanceof(Vector);
    });

    it('should have a scalar division assignment method', () => {
      y.dividedByEq(5);
      y.isEqual(v).should.be.true;
      y.should.be.an.instanceof(Vector);
    });

    it('should have an elementwise multiplication method', () => {
      x = v.ewTimes(w);
      x.isEqual([2, 6, 12]).should.be.true;
      x.should.be.an.instanceof(Vector);
    });

    it('should have an elementwise multiplication assignment method', () => {
      v.ewTimesEq(w);
      v.isEqual([2, 6, 12]).should.be.true;
      v.should.be.an.instanceof(Vector);
    });

    it('should have an elementwise division method', () => {
      x = v.ewDividedBy(v);
      x.isEqual([1, 1, 1]).should.be.true;
      x.should.be.an.instanceof(Vector);
    });

    it('should have an elementwise division assignment method', () => {
      v.ewDividedByEq(v);
      v.isEqual([1, 1, 1]).should.be.true;
      v.should.be.an.instanceof(Vector);
    });

    it('should have a method for raising each element to a power', () => {
      x = v.toThe(3);
      x.isEqual([1, 8, 27]).should.be.true;
      x.should.be.an.instanceof(Vector);
    });

    it('should have a method for elementwise power raising', () => {
      x = v.ewToThe(w);
      x.isEqual([1, 8, 81]).should.be.true;
      x.should.be.an.instanceof(Vector);
    });

    it('should have a dot product method', () => {
      x = v.dot(w);
      x.should.eql(20);
    });

    it('should have a method to return the norm of a vector', () => {
      x = Vector.of(3, 4);
      x.norm().should.eql(5);
    });
  });
});
