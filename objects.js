const product ={
    itemName: "HandWash",
    price:200,
    discount:50,
    itemCode:13
}
function creatProduct(name, price, discount, itemCode) 
{
    return {
        itemName:name,
        price:price,
        discount:discount,
        itemCode:itemCode
    }
}
const footBall=creatProduct("footBall", 150,30,31);
console.log(footBall)
function Product(name, price, discount, itemCode)
{
    this.itemName=name;
    this.price=price;
    this.discount=discount;
    this.itemCode=itemCode;
}
const mobile= new Product("mobile", 150,30, 31);
console.log(mobile);