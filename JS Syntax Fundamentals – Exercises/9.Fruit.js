function fruitPrice(type,weight,price){
    console.log(`I need $${(price * weight / 1000).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${type}.`)
}
fruitPrice('orange',2500,1.80);