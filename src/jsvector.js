
var Vector = function(length) {

  var inst;

  if (!length) {
    inst = [];
  } else {
    inst = new Array(length);
    inst.fill(0);
  }

  inst.__proto__ = Vector.prototype;

  return inst;
};

Vector.prototype = Object.create(Array.prototype);

addVectorMethods(Vector.prototype);

Vector.from = function() {
  var inst = new Vector();
  return inst.push(Array.from(arguments));
};

Vector.of = function() {
  var inst = new Vector();
  return inst.push(Array.from(arguments));
};

function addVectorMethods(that) {

  that.testMethod = function() {
    return new Vector();
  };

  that.print = function() {
    console.log("It worked");
  };

  return that;
}

module.exports = {
  Vector: Vector
};
