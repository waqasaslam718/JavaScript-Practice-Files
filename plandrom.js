function checkPlandrom(number) {
    let str = number.toString();
    let length = str.length;
    for (let i = 0; i < length/2; i++) {
        if (str[i] !== str[length - 1-i ]) {
            return false;
        }
    }
    return true;
}

console.log(checkPlandrom(122)); // true