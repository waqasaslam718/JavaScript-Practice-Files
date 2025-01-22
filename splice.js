let arr=["I", "go", "home"];

console.log(arr[1]); // Output: ["I", <1 empty item>, "home"];
console.log (arr.length);

let removed=arr.splice(1, 1 );
console.log(arr); // Output: ["go", "home"];
console.log (arr.length);
console.log(removed);
arr.splice(1, 0,"Waqas Home" );



console.log(arr); // Output: ["go", "Waqas Home", "home"];
arr.slice(0, arr.length);
console.log(arr); // Output: ["Waqas Home", "home"];