let john = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null; // overwrite the reference

console.log (map.keys());