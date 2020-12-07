// TODO: write the validation functions

// - must be a string
// - must be non-empty
// - must contain non-whitespace of at least 3 characters
function isValidName(name) {
  return typeof(name) == "string"
    && name.trim().length > 3;
}

// - either parameter may only be a string or number
// - both parameters should be treated as numbers
// - both numbers must be 0 or higher
// - both numbers must be whole numbers
// - `attended` must be less than or equal to `length`
function hoursAttended(attended, length) {
  if (
    !isNumber(attended) ||
    !isNumber(length)
  ) return false;

  attended = Number(attended);
  length = Number(length);

  return attended <= length
    && attended >= 0
    && length >= 0
    && Number.isInteger(attended)
    && Number.isInteger(length);

  // **************************

  function isNumber(value) {
    // should be a number
    return typeof value == "number"
      // or a non-empty string that convertible to number
      || (typeof value == "string" && value.trim() != "" && !isNaN(value));
  }
}

// tests:

console.log("isValidName:");
console.log("------------");
console.log(isValidName("Frank") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);

console.log("hoursAttended:");
console.log("------------");
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);
