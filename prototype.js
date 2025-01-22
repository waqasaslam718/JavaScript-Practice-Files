let animal={
    name:"dog",
    legs:4,
    eat:function(){
        console.log(this.name + " is eating");
    }
}
let rabit={
    name:"rabbit",
    eyes:"blue",
    __proto__ : animal 

   
  
    
}
rabit.eat=function()
{
    console.log("Rabbit! Bounce-bounce!");
  }




console.log(rabit.legs);
rabit.eat();
animal.eat();
