function SumOfAllDigits(digts) {
let sum=0;
while(digts > 0) {
    sum += digts % 10;
    digts = Math.floor(digts / 10);
}
return sum;
}

console.log('Sum of digits: ', SumOfAllDigits(12345));  

