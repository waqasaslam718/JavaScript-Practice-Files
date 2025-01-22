// let user = {
//     name: "John",
//     age: 30
//   };
  
//   user.sayHi = function() {
//     console.log("Hello!");
//   };
  
//   user.sayHi(); // Hello!
// these objects do the same

// user = {
//     sayHi: function() {
//       console.log("Hello");
//     }
//   };
  
//   // method shorthand looks better, right?
//   user = {
//     sayHi() { // same as "sayHi: function(){...}"
//       console.log("Hello");
//     }
//   };
// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       // "this" is the "current object"
//       console.log(this.name);
//     }
  
//   };
  
//   user.sayHi(); // John
// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       console.log( this.name ); // leads to an error
//     }
  
//   };
  
  
//   let admin = user;
//   user = null; // overwrite to make things obvious
  
//   admin.sayHi(); //
// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//     console.log( this.name );
// }

// // use the same function in two objects
// user.f = sayHi;
// admin.f = sayHi;

// // these calls have different this
// // "this" inside the function is the object "before the dot"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)

// admin.f(); // Admin (dot or square brackets access the method – doesn't matter)
let user = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () =>console.log(this.firstName);
      arrow();
    }
  };
  
  user.sayHi(); // Ilya
  let arrow = () =>console.log(this.firstName);
  arrow(); // undefined (global scope)