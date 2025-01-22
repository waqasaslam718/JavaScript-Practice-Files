let arr = [1, 2, 15];
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
arr.sort(compareNumeric);
console.log(arr); // Output: 1, 2, 15