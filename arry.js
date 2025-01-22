let arr=[1,2,3,4,5,6,7,8,9,10,11];
arr.unshift(0);

// console.log(arr); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// function findElement(arr,target)
// {
//     for(let i=0;i<arr.length; i++)
//     {
//         if(arr[i]===target)
//         {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log("The index of target element in array ",findElement(arr,5)); // Output: 4
// const findelement=(arr,target)=>{
    
//         for(let i=0;i<arr.length; i++)
//         {
//             if(arr[i]===target)
//             {
//                 return true;
//             }
//         }
//         return false;
//     }
// console.log("The   index of target element in array ",findelement(arr,15)); // Output: 4
// console.log(arr); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// arr.splice(1,3 ,6,5,4,56)
// console.log("After removing 3 elements from the array at index 1: ",arr); // Output: [0, 7, 8, 9, 10, 11]
// let slice= arr.slice(1,5);
// console.log("After slicing array from index 1 to 4: ",slice); // Output: [7, 8, 9, 10]
// let arr2=[...arr];
// let arr2=Array.from(arr);   
// arr2.splice(1,4); //
// console.log("After removing 4 elements from the array at index 1: ",arr2,arr); // Output: [0, 6, 5, 11]
let arr2=['a', 'b', 'c', 'd', 'e']
 arr2=arr.concat(arr2);
 console.log("After concatenation: ",arr2); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'a', 'b', 'c', 'd', 'e']



let checkIsEqual=(arr1,arr2) => {
    // if(arr1.length !== arr2.length) {
    //     return false;
    // }
    // for(let i = 0; i < arr1.length; i++) {
    //     if(arr1[i] !== arr2[i]) {
    //         return false;    
    //     }
    // }
    // return true;
    
    return arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i]);

}
console.log("Are the two arrays equal? ", checkIsEqual([1,2,3],[1,2,3]));        