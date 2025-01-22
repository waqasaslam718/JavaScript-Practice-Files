function findMissingNumber(arr) {
    let n = arr.length + 1;  // The length + 1 is the expected size of the complete sequence
    let expectedSum = (n * (n + 1)) / 2;  // Sum of first n natural numbers
    let actualSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }
    
    let missingNum = expectedSum - actualSum;
    return missingNum;
}

console.log(findMissingNumber([1, 2, 4,5,6,7]));  // Output: 13

       