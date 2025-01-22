function numberofdigit(number)
{   let count=0;
    do{
        number = Math.floor(number/10);
        count++;
    }
    while(number>0);
    return count;  // return the count of digits
}
console.log(numberofdigit(123456));