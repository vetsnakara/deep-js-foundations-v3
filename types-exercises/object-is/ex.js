// TODO: define polyfill for `Object.is(..)`

if (!Object.is || true) {
  Object.is = function ObjectIs(a, b) {
    // both NaN
    if (a !== a && b !== b) return true;

    // 0 and -0
    if (1/a === -Infinity && 1/b === -Infinity) return true;
    if (a === 0 && 1/b === -Infinity) return false;
    if (1/a === -Infinity && b === 0) return false;

    return a === b;
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
