
const getPromise =() =>{
    return  new Promise((resolve, reject) => {
    console.log("I am a promise");
//    resolve("res");
     reject("networkError");

    })};
    let promise=getPromise();
    promise.then((res) => {
        console.log("Promise Resolved",res);
    });
    promise.catch((err) => {
        console.log("Promise Rejected",err);
    });
// function getData(dataID, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataID);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 2000);
//     });
// }

// // Call the function
// getData(1);
