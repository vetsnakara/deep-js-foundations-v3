// TODO: define polyfill for `Object.is(..)`

if (!Object.is || true) {
  Object.is = function ObjectIs(a, b) {
    var isNegZeroA = isNegZero(a);
    var isNegZeroB = isNegZero(b);

    // case: -0
    if (isNegZeroA || isNegZeroB) {
      //  -0  any  -> false
      // any   -0  -> false
      //  -0   -0  -> true
      return isNegZeroA && isNegZeroB;
    }

    // case: both NaN
    if (isNaN(a) && isNaN(b)) return true;

    return a === b;

    // ................

    function isNaN(v) {
      return v !== v; // or Number.isNaN(..)
    }

    function isNegZero(v) {
      return v === 0 && 1/v === -Infinity;
    }
  }
}

// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
