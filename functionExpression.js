// // prompt("What is your age?", 18);

// // conditionally declare a function
// let age = 17;

// if (age < 18) {

//   function welcome() {
//    console.log("Hello!");
//   }

// } else {

//   function welcome() {
//    console.log("Greetings!");
//   }

// }

// // ...use it later
// welcome(); // Error: welcome is not defined
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);