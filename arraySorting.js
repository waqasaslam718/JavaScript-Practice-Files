let arr=[1,0,5,3,2,1,9];
// arr.sort();
// arr.sort((a,b)=>b-a); // Sorting in descending order
// arr.reverse();
// console.log(arr); // Output: [-9, 0, 1, 1, 2, 3, 5]  
// let result=arr.map((ele,i)=> ele*ele);
// console.log(result); // Output: [81, 0, 1, 1, 4, 9, 25]
// let filter= arr.filter((ele,i)=> (ele>0)); 
// console.log(filter);     
// let SumOfarr=arr.reduce((acc,ele)=> acc+ele); 
// console.log(SumOfarr); // Output: 12
// let arr=[1,[[0,5,3],2,1],9];
// let flatten= arr.flat(2);;
// console.log(flatten); // Output: [1, 0, 5, 3, 2, 1, 9]
    let find= arr.find((ele, i) => (ele>5))
    console.log(find); // Output: 1

        