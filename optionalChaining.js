// let user = null;

// console.log( user?.address ); // undefined
// console.log( user?.address.street ); // undefined

// let user = null;
// let x = 2;

// console.log (user?.sayHi(x++)); // no "user", so the execution doesn't reach sayHi call and x++

// console.log(x); // 0, value not incremen
// let userAdmin = {
//     admin() {
//         console.log("I am admin");
//     }
//   };

//   let userGuest = {};

//   userAdmin.admin?.(); // I am admin

//   console.log (userGuest?.admin); // nothing happens (no such method)
//    let num=[1,2,3,4,5,6,7,8,9,"waqas",10,11,true];
//    console.log(num[9]);
// let id =Symbol("id");
// let id2 =Symbol("id");
// console.log(id === id2); // false
//  id = Symbol("id");
// console.log(id.toString()); 
// // Symbol(id), now it works
// console.log(id.description); // Symbol(id), now it works
// const obj = {
//     name: "John",
//   age: 30,
// };
// const is = Symbol("id");
// obj[is  ] = 123;
// console.log(obj[is]); 

// const secretSymbol = Symbol("secret");
// obj[secretSymbol] = "hidden value";

// for (let key in obj) {
//   console.log(key); // Doesn't log `secretSymbol`
// }
let cls = {
  // waqas: {
  //   info: {
  //     address: {
  //       city: "lhr"
  //     }
  //   }
  // }
}

console.log(cls.waqas ? cls.waqas.info ? cls.waqas.info.address ? cls.waqas.info.address.city : undefined : undefined: undefined);
console.log(cls.waqas?.info?.address?.city);


