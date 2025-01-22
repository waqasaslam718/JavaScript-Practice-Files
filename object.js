// function makeUser(name, age) {
//     return {
//       name: name,
//       age: age,
//       // ...other properties
//     };
//   }
  
//   let user = makeUser("John", 30);
//   console.log(user.name); // John
// these properties are all right
// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
//   };
  
//   console.log( obj.for + obj.let + obj.return );  // 6
// let obj = {
//     0: "test" // same as "0": "test"
//   };
  
//   // both alerts access the same property (the number 0 is converted to string "0")
//   console.log( obj["0"] ); // test
//   console.log( obj[0] ); // test (same property)
// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
//   for (let key in user) {
//     // keys
//     // console.log( key );  // name, age, isAdmin
//     // values for the keys
//     console.log( user[key] ); // John, 30, true
//   }
// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     // ..,
//     "+1": "USA"
//   };
  
//   for (let code in codes) {
//     console.log(code); // 1, 41, 44, 49
//     console.log(code[codes]);
//   }
// let user =
// { name: 'john', 
// surname: 'Smith',
// name: 'Pete '};
// delete user.name;
// function isEmpty(obj) {
//     for (let key in obj) {
//       // if the loop has started, there is a property
//       return false;
//     }
//     return true;
//   }
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
  
//   let sum = 0;
//   for (let key in salaries) {
//     sum += salaries[key];
//   }
  
//   console.log(sum); 
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }

