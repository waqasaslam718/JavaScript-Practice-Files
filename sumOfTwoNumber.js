// Task 1
// let num1=+prompt("please enter the first number",5);
// let num2=+prompt("please enter the second number",15);
// let sum=num1+num2;
// alert("sum: " +sum);





//  task2
// alert(Math.round(6.35));


// task 3

// function readNumber()
// {
//     let num=+prompt("please enter a number",0);
//     if(isNaN(num))
//     {
//         readNumber();
//     }
//     else if(num==null || num=="")
//     {
//         return null;
//     }
//     return +num;
    
// }
// let num=readNumber();
// alert("num: " + num);


// task 4

// function CreatRandomNumber( min, max)
// {
//     return (Math.random() * (max - min + 1)) + min;
// }

// let num1=CreatRandomNumber(1,10);
// console.log(num1);


// task 5
function CreatRandomNumber( min, max)
{
    return Math.floor (Math.random() * (max - min + 1)) + min;
}

let num1=CreatRandomNumber(1,10);
console.log(num1);