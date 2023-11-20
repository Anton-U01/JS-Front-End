function solve (stockArr,orderArr){
    let stock = {};
    for (let index = 0; index < stockArr.length; index += 2) {
        let product = stockArr[index];
        let amount = Number(stockArr[index + 1]);
        stock[product] = amount;
    }
    for (let index = 0; index < orderArr.length; index += 2) {
        let product = orderArr[index];
        let amount = Number(orderArr[index + 1]);
        if(stock.hasOwnProperty(product)){
            let oldAmount = stock[product];
            stock[product] = oldAmount + amount;
        } else {
            stock[product] = amount;
        }
    }
    Object.keys(stock).forEach(k => {
        console.log(`${k} -> ${stock[k]}`);
    });
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );