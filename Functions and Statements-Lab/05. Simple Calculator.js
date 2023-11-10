function calculator(n1,n2,operator){
    let object = {
        multiply: (n1,n2) => n1 * n2,
        divide: (n1,n2) => n1 / n2,
        add: (n1,n2) => n1 + n2,
        subtract: (n1,n2) => n1 - n2
    }
    let result = object[operator](n1,n2);
    console.log(result);
}

calculator(5,
    5,
    'multiply'
    )