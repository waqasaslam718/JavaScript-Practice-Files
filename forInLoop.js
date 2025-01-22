let animal=
{
    name:"dog",
    legs:4
};
for(let key in animal){
    console.log(key + " : " + animal[key]);
}
let names=["waqas","umair","awais","ahsan"];
for(let key in names){
    console.log(key + " : " + names[key]);
}
for(let key of names){
    console.log(key);
}

    