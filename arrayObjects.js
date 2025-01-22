const characters =[
  {name: "John", age: 25, height : 25},
  {name: "Alice", age: 30 , height : 30},
  {name: "Bob", age: 28, height :32},
  {name: "david", age:24, height :24},
];
const names =characters.map(ch=> ch.name);
console.log(names);
const propertiesOfCharacters= characters.map(ch=> {
    return {
        name: ch.name,
    age: ch.age
}
  });
console.log(propertiesOfCharacters);
