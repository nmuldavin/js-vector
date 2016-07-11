
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

function addVectorMethods(that) {

  that.testMethod = function() {
    return new Vector();
  };

  that.print = function() {
    console.log("It worked");
  };

  return that;
}

Vector.prototype = addVectorMethods(Vector.prototype);

var tester = new Vector(5);

console.log(tester);
console.log(Vector.from(1, 2, 3));
