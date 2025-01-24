// let promise = new Promise(function(resolve, reject) {
//     // the function is executed automatically when the promise is constructed
  
 
//     setTimeout(() => resolve("done!"), 1000); // shows "done!" after 1 second
 

//   });
 
  
//   // resolve runs the first function in .then
//   promise.then(
//     result => console.log(result), // shows "done!" after 1 second
//   )


// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });
  
//   // .catch(f) is the same as promise.then(null, f)
//   promise.catch(console.log); 


function delay(ms) {
    // your code
  }
  
  delay(3000).then(() => alert('runs after 3 seconds'));