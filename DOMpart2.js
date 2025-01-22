// let div= document.querySelector("div");
// console.log(div);
// let id= div.getAttribute("id");
// console.log(id);
// let name= div.getAttribute("name");
// console.log(name);  
// // let para=document.querySelector("p");
// // console.log(para.getAttribute("class"));
// let para=document.querySelector("p");
// console.log(para.setAttribute("class","new Class1234"));    
// div.style.backgroundColor="green";
// div.style.fontSize="26px";
let button= document.createElement("button");
button.innerText="Click Me!";
console.log(button);
let div= document.querySelector("div");
// div.append(button);
div.after(button);

let heading=document.createElement("h1");
heading.innerText="I am new";
div.appendChild(button);           
 
