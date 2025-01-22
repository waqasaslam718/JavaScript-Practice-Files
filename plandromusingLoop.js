function checkPlandrom(num)
{ 
  let copynum=num, reverse=0;
  while(copynum > 0)
  {
    let remainder = num % 10;
    reverse = (reverse * 10) + remainder;
    copynum = Math.floor(num / 10);
  }
  return (num===copynum);
}

console.log(checkPlandrom(12321)); // true