function sum(a,b)
{
   return a+b;
}

function calculator(a,b, sum){
    console.log("Sum: ", sum(a,b));
}
    
calculator(3,4,sum);
function sum(a,b)
{
   return a+b;
}

function calculator(a,b, sum){
    console.log("Sum: ", sum(a,b));
}

calculator(3,4,(a,b) => {
    return a+b;
}
);