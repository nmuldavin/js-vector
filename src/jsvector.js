
function Vector(length) {
  let inst;
  let i;

  if (!length) {
    inst = [];
  } else {
    inst = new Array(length);

    for (i = 0; i < length; i++) {
      inst[i] = 0;
    }
  }

  Object.setPrototypeOf(inst, Vector.prototype);
  return inst;
}

Vector.prototype = Object.create(Array.prototype);

Vector.from = function from(...args) {
  const inst = Array.from(...args);

  Object.setPrototypeOf(inst, Vector.prototype);
  return inst;
};

Vector.of = function of(...args) {
  const inst = Array.of(...args);

  Object.setPrototypeOf(inst, Vector.prototype);
  return inst;
};

const vectorMethods = {
  isEqual(other) {
    const length = this.length;
    let i;

    for (i = 0; i < length; i++) {
      if (this[i] !== other[i]) {
        return false;
      }
    }

    return true;
  },
};

function addVectorMethods(that) {
  that.elementWise = function elementWise(operation, ...vecs) {
    const out = new Vector();
    const numVecs = vecs.length;
    const length = vecs[0].length;
    let i;

    function getIthValues(index, args) {
      const values = new Vector();
      let j;

      for (j = 0; j < numVecs; j++) {
        values[j] = args[j][index];
      }

      return values;
    }

    for (i = 0; i < length; i++) {
      out[i] = operation(...getIthValues(i, vecs));
    }

    return out;
  };

  that.isEqual = function isEqual(other) {
    const length = this.length;
    let i;

    for (i = 0; i < length; i++) {
      if (this[i] !== other[i]) {
        return false;
      }
    }

    return true;
  };

  that.elIsEqual = function elIsEqual(other) {
    const out = new Vector();
    const length = this.length;
    let i;

    for (i = 0; i < length; i++) {
      out[i] = 0 + (this[i] === other[i]);
    }

    return out;
  };

  that.plus = function plus(other) {
    const out = new Vector();
    const length = this.length;
    let i;

    for (i = 0; i < length; i++) {
      out[i] = this[i] + other[i];
    }

    return out;
  };

  that.plusEq = function plusEq(other) {
    const length = this.length;
    let i;

    for (i = 0; i < length; i++) {
      this[i] += other[i];
    }
  };

  that.minus = function minus(other) {
    const out = new Vector();
    const length = this.length;
    let i;

    for (i = 0; i < length; i++) {
      out[i] = this[i] - other[i];
    }

    return out;
  };

  that.minusEq = function minusEq(other) {
    const length = this.length;
    let i;

    for (i = 0; i < length; i++) {
      this[i] -= other[i];
    }
  };

  that.times = function times(scalar) {
    const out = new Vector();
    const length = this.length;
    let i;

    for (i = 0; i < length; i++) {
      out[i] = this[i] * scalar;
    }

    return out;
  };

  that.timesEq = function timesEq(scalar) {
    const length = this.length;
    let i;

    for (i = 0; i < length; i++) {
      this[i] *= scalar;
    }
  };

  that.dividedBy = function dividedBy(scalar) {
    const out = new Vector();
    const length = this.length;
    let i;

    for (i = 0; i < length; i++) {
      out[i] = this[i] / scalar;
    }

    return out;
  };

  that.dividedByEq = function dividedByEq(scalar) {
    const length = this.length;
    let i;

    for (i = 0; i < length; i++) {
      this[i] /= scalar;
    }
  };

  that.ewTimes = function ewTimes(other) {
    const out = new Vector();
    const length = this.length;
    let i;

    for (i = 0; i < length; i++) {
      out[i] = this[i] * other[i];
    }

    return out;
  };

  that.ewTimesEq = function ewTimesEq(other) {
    const length = this.length;
    let i;

    for (i = 0; i < length; i++) {
      this[i] *= other[i];
    }
  };

  that.ewDividedBy = function ewDividedBy(other) {
    const out = new Vector();
    const length = this.length;
    let i;

    for (i = 0; i < length; i++) {
      out[i] = this[i] / other[i];
    }

    return out;
  };

  that.ewDividedByEq = function ewTimesEq(other) {
    const length = this.length;
    let i;

    for (i = 0; i < length; i++) {
      this[i] /= other[i];
    }
  };

  that.toThe = function toThe(power) {
    const out = new Vector();
    const length = this.length;
    let i;

    for (i = 0; i < length; i++) {
      out[i] = Math.pow(this[i], power);
    }

    return out;
  };

  that.ewToThe = function ewToThe(other) {
    const out = new Vector();
    const length = this.length;
    let i;

    for (i = 0; i < length; i++) {
      out[i] = Math.pow(this[i], other[i]);
    }

    return out;
  };

  that.dot = function dot(other) {
    const length = this.length;
    let out = 0;
    let i;

    for (i = 0; i < length; i++) {
      out += this[i] * other[i];
    }

    return out;
  };

  that.norm = function norm() {
    return Math.sqrt(this.dot(this));
  };

  return that;
}

// addVectorMethods(Vector.prototype);
for (let method in vectorMethods) {
  Vector.prototype[method] = Vector.prototype[method]
}

module.exports = {
  Vector,
};
