function order(str,n){
    let object = {
        coffee: (n) => n * 1.50,
        water: (n) =>  n * 1.00,
        coke: (n) => n * 1.40,
        snacks: (n) => n * 2.00
    }
    let result = object[str](n).toFixed(2);
    console.log(result);
    
}

order("coffee", 2)