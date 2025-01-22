let arr=[1,2,3,4,5,6,7,8];
let result=arr[Symbol.iterator]();

console.log(result.next());
console.log(result.next().value);