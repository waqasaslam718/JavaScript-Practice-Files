
function sumtoNum(value)
{
    let sum = 0;
    for(let i = 1; i <= value; i++)
    {
        sum += i;
    }
    return sum;
}
function sumUsingFormulla(value)
{
    return (value * (value + 1)) / 2;
}

function sumTo(value)
{
    if(value==1)
    {
        return 1;
    }
    else
    {
        return value + sumTo(value-1)
    }
}
console.log(sumTo(5)); // Output: 15
console.log(sumUsingFormulla(5)); // Output: 15
console.log(sumtoNum(5)); // Output: 15