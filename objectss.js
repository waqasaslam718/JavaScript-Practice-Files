// let user={
//     name: "John Doe",
//     age: 30,
//     isStudent: true
// }

// console.log(user.name); 
// user.lastname="bartin";
// console.log(user.lastname);
// delete user.age;
// console.log(user.age);

// let user = {};

// // set
// user["likes birds"] = true;

// // get
// console.log(user["likes birds"]); // true

// // delete
// delete user["likes birds"];

// console.log(user["likes birds"]); // undefined


// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = prompt("What do you want to know about the user?", "name");
  
//   // access by variable
// //   alert( user[key] ); // John (if enter "name");
// let user = {
//   name: "John",
//   age: 30
// };

// let key = "name";
// alert( user.key ) // undefined
// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert( bag.fruit ); // 5 if fruit="apple"
// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {};

// // take property name from the fruit variable
// bag[fruit] = 5;

// alert( bag.apple ); // 5 if fruit="apple"

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     // ...other properties
//   };
// }

// let user = makeUser("John", 30);
// alert(user.name); // John
// let user = { age: 30 };

// let key = "age";
// alert( key in user ); // true, property "age" exists
// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// for (let key in user) {
//   // keys
//   alert( key );  // name, age, isAdmin
//   // values for the keys
//   // alert( user[key] ); // John, 30, true
// }


// let codes = {
//   "2": "Germany",
//   "3": "Switzerland",
//   "4": "Great Britain",
//   // ..,
//   "1": "USA"
// };

// for (let code in codes) {
//   alert(code); // 1, 41, 44, 49
// }
// let user {};
// user.name="John";
// user.surname="Doe";
// user.name="pete";
// delete user.name;
// console.log(user);

// function isEmpty(obj)
// {
//   for (let key in obj) {
//     return false;
//   }
//   return true;

// }
// let schedule = {};

// alert( isEmpty(schedule) ); 

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); 
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum=0;
// for ( let key in salaries) 
// {
//   sum += salaries[key];
// } 
// // alert(sum);
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

//  function multiplyNumeric(menu)
//  {
//    for (let key in menu) {
//      if (typeof menu[key] == 'number') {
//        menu[key] *= 2;
//      }
//    }
//    return menu;
//  }
//  console.log(multiplyNumeric(menu));  // { width: 400, height: 600, title: "My menu" }
// let user = { name: 'John' };

// let admin = user;

// admin.name = 'Pete'; 
// // changed by the "admin" reference
// user.name=admin.name;

// alert(user.name); // 'Pete', changes are seen from the "user" reference
    // let user = {
    //     name: "John",
    //     age: 30
    //   };
    
    //   let clone = {}; // the new empty object
    
    //   // let's copy all user properties into it
    //   for (let key in user) {
    //     clone[key] = user[key];
    //   }
    
    //   // now clone is a fully independent object with the same content
    
    //   // changed the data in it
    //   clone=user;
    //   clone.name = "Pete";
    //   // now user and clone both refer to the same object   
    
    //   alert( user.name ); 


    let user = {
        name: "John",
        sizes: {
          height: 182,
          width: 50
        }
      };
      
      let clone = Object.assign({}, user);
      
      alert( user.sizes === clone.sizes ); // true, same object
      
      // user and clone share sizes
      user.sizes.width = 60;    // change a property from one place
      alert(clone.sizes.width); // 60, get the result from the other one