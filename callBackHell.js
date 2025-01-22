// // using call backHell 
// function getData(dataID, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataID);

//         if (getNextData) { getNextData(); }

//     }, 2000)

// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3)
//     })
// });

// // using Promise chaining
// function getData(dataID) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataID);
//             resolve("sucess")

//         }, 2000)
// })
    

// }

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//         getData(3).then((res) => {
//             console.log(res);
//         });
//     });

// });
// using async await 
  function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataID);
            resolve("sucess")

        }, 2000)
})
    

}

async function getAllData()
{ 
    console.log("data1................")
    await getData(1);
    console.log("data2................")

    await getData(2);
    console.log("data3................")

    await getData(3);
}
getAllData();
