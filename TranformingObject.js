let prices={
    apple: 2,
    orange: 8,
    banana: 5
}
let doublePrice= Object.fromEntries(
    Object.entries(prices).map((entery) => [entery[0], entery[1]*2])
)
console.log(doublePrice.banana)