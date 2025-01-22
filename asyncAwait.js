async function hello() {
    console.log("Hello World!");
}

// hello();
function api() {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
        console.log("weather data")
        resolve("200");}, 2000);
    })


}
async function weather() {
    await api();
    await api();

}
weather();


// IIFe Function
// (async () => {
//     await api();
//     await api();
// })();

