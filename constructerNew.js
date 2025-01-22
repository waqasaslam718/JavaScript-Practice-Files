// function Sum(value1, value2) 
// {
//     this.value1=value1;
//     this.value2=value2;
//     this.sum=function()
//     {
//         return this.value1+this.value2;
//     }
// }

// let sum=new Sum(12,5);
// console.log(sum.sum());
// function User() {
//     console.log(new.target);
//   }
  
//   // without "new":
//   User(); // undefined
  
//   // with "new":
//   new User(); // function User { ... }

// function User(name) {
//     if (!new.target) { // if you run me without new
//       return new User(name); // ...I will add new for you
//     }
  
//     this.name = name;
//   }
  
//   let john = User("John"); // redirects call to new User
//   console.log(john.name); // John
// function BigUser() {

//     this.name = "John";
  
//     return ;
//   }
  
//   console.log( new BigUser() );  // Godzilla, got that object
// function User(name) {
//     this.name = name;
  
//     this.sayHi = function() {
//       console.log( "My name is: " + this.name );
//     };
//   }
  
//   let john = new User();
  
//   john.sayHi(); // My name is: John
//   console.log(john)
  /*
  john = {
     name: "John",
     sayHi: function() { ... }
  }
  */

//  let obj = {name:"waqas"};

// function A() { return obj; }
// function B() { return obj; }

// console.log( new A() == new B() ); 
// function Accumulator(startingValue) {
//     this.value = startingValue;
  
//     this.read = function() {
//       this.value += +prompt('How much to add?', 0);
//     };
  
//   }
  
//   let accumulator = new Accumulator(1);
//   accumulator.read();
//   accumulator.read();
//   alert(accumulator.value);
function Calculator(value1, value2) {
this.a = value1;
this.b = value2;
    // this.read = function() {
    //   this.a = +prompt('a?', 0);
    //   this.b = +prompt('b?', 0);
    // };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator(5,5);
 
  console.log( "Sum=" + calculator.sum() );
  console.log( "Mul=" + calculator.mul() );
  