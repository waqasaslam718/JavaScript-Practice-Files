function factorial(value) {
    return value ? factorial(value-1) :1;
}

console.log(factorial(5)); // Output: 120