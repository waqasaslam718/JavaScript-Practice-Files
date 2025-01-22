console.log (isNaN("abc")); // true, because "abc" cannot be converted to a number
console.log (isNaN("123")); // false, because "123" can be converted to a number (123)
console.log  (Number.isNaN("123")); // false, because "abc" is not a number type
console.log  (Number.isNaN(NaN));   // true, because NaN is of type number and is NaN
