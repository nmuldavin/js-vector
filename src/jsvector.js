
var Vector = function(length) {

  var inst, i;

  if (!length) {
    inst = [];
  } else {
    inst = new Array(length);
    for(i = 0; i < length; i++) {
      inst[i] = 0;
    }
  }

  inst.__proto__ = Vector.prototype;

  return inst;
};

Vector.prototype = Object.create(Array.prototype);

addVectorMethods(Vector.prototype);

Vector.from = function() {
  var inst = Array.from.apply(this, arguments);
  inst.__proto__ = Vector.prototype;
  return inst;
};

Vector.of = function() {
  var inst = Array.of.apply(this, arguments);
  inst.__proto__ = Vector.prototype;
  return inst;
};

function addVectorMethods(that) {

  that.elementWise = function(operation, ...vecs) {
    var i, out = new Vector();
    var numVecs = vecs.length;
    var length = vecs[0].length;
    var getIthValues = function(index, args) {
      var j, values = new Vector();

      for(j = 0; j < numVecs; j++) {
        values[j] = args[j][index];
      }

      return values;
    };


    for(i = 0; i < length; i++) {
      out[i] = operation(...getIthValues(i, vecs));
    }

    return out;
  };

  that.isEqual = function(other) {
    var i, length=this.length;

    for(i = 0; i < length; i++) {
      if (this[i] !== other[i]) {
        return false;
      }
    }

    return true;
  };

  that.elIsEqual = function(other) {
    var out = new Vector();
    var i, length=this.length;

    for(i = 0; i < length; i++) {
      out[i] = this[i] === other[i];
    }

    return out;
  };

  that.plus = function(other) {
    var out = new Vector();
    var i, length = this.length;

    for(i = 0; i < length; i++) {
      out[i] = this[i] + other[i];
    }

    return out;
  };

  that.pluseq = function(other) {
    var i, length = this.length;

    for(i = 0; i < length; i++) {
      this[i] += other[i];
    }

  };

  that.minus = function(other) {
    var out = new Vector();
    var i, length = this.length;

    for(i = 0; i < length; i++) {
      out[i] = this[i] - other[i];
    }

    return out;
  };

  return that;
}



module.exports = {
  Vector: Vector
};
