// let btn = document.querySelector("#btn");  
// // btn.onclick = () => {
// //     alert("Button Clicked");
// // }
//  let div= document.querySelector(".dive");
// //       div.onmouseover=(event)=>{ 
        
             
// //         console.log('this is over on div')}
// btn.addEventListener("click", () => {
//     console.log("Button Clicked");
// });
// const handler3=() => {
//     console.log("Button Clicked");
// }
// btn.addEventListener("click",handler3 );
// btn.addEventListener("click", () => {
//     console.log("Button Clicked");
// });btn.addEventListener("click", () => {
//     console.log("Button Clicked");
// });

// btn.removeEventListener("click", handler3);
let btn = document.querySelector("#btn");  
let currentMode="Lighter";
btn.addEventListener("click", () => {
    if(currentMode === "Lighter"){
        document.body.style.backgroundColor="black";
        currentMode="Darker";
    }else{
        document.body.style.backgroundColor="white";
        currentMode="Lighter";
    }
    console.log("Button Clicked");
});
