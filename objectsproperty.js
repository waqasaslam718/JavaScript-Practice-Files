// let user={
//     name: "John Doe",
//     age: 30
// }
// let descripter=Object.getOwnPropertyDescriptor(user ,'name');
// console.log(descripter);
// console.log( JSON.stringify(descripter, null, 2 ) );

let user = { };

 let descripter=Object.defineProperty(user, "name", {
  value: "John",
  // for new properties we need to explicitly list what's true
  enumerable: true,
  configurable: true
});
console.log(descripter);


console.log(user.name); // John
user.name = "Pete"; // Error