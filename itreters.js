let arr=[100,200,300,400];
let iter=arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next().value);

 let str="waqaas aslam";
let result=str[Symbol.iterator]();
 console.log(result.next());
console.log(result.next().value);

let itter=result.next();
while(!itter.done)
{
    console.log(itter.value);
    itter=result.next();

}
