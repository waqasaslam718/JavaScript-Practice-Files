function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 1");
            resolve("Async Function resolved");

        }, 2000);
    });

    
}
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 2");
            resolve("Async Function resolved");

        }, 4000);
    });

    

}
console.log("fetching data1...");
asyncFunc().then((res)=>{
    
    console.log("fetching data2...");
asyncFunc2().then((res)=>{
  
});
});
// console.log("fetching data1...");
// let p1=asyncFunc();
// p1.then((res)=>{
//     console.log(res);
//     console.log("fetching data2...");
// let p2=asyncFunc2();
// p1.then((res)=>{
//     console.log(res);
// });
// });
