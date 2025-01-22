// console.log("waqas");
// var myAge=19;
// console.log(myAge);
// console.log(typeof myAge);
// console.log(typeof (myAge +""));

// console.log(typeof String(myAge));

// var myName="waqas";
// console.log(myName);
// console.log(typeof myName);
// console.log(typeof Number(myName));
// var myName = -5;
// if (true) {
//   console.log("this is truthy value");
// } else {
//   console.log("its a falsy value");
// }
// const myString = "42.6";
// const myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42
// let firstName = waqas;
// let lastName = "Aslam";
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);
// console.log(typeof fullName);
// const persons = ["Awais", "Waqas", "Asad", "Umair"];
// console.log(persons[persons.length - 1]);
// alert(2+4-3*2);
// alert((2-3)+(9/3));
// alert((2+1/2*3));
// alert((4/2%4));

// let value = prompt("Please enter the number");
// if (value ==1)
// {
//     alert("value is greater than zero");
// }
//  else if (value ==-1)
// {
//     alert("value is greater less than zero");
// }
// else
// (value ==0)
// {
//     alert("value is equal to zero");
// }
// let firstName = "";
// let lastName = "";
// let nickName = "";

// alert( firstName || lastName || nickName || "Anonymous"); // SuperCod

// for (let i = 0; i < 10; i++) {

//     // if true, skip the remaining part of the body
//     if (i % 2 == 0) continue;
  
//     alert(i); // 1, then 3, 5, 7, 9
//    alert("waqas"); 

// }
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now