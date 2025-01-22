let map=new Map();
map.set('name','John');
map.set(1, 'John');
map.set(true,'waqas')
console.log(map.get(true));



let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

console.log( visitsCountMap.get(john) ); // 123