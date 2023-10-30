function cooking(numberAsString,op1,op2,op3,op4,op5){
    let number = Number(numberAsString);
    let array = [];
    array.push(op1);
    array.push(op2);
    array.push(op3);
    array.push(op4);
    array.push(op5);
    for(let i = 0; i < 5; i++){
        switch(array[i]){
            case "chop":
                number /= 2;
                console.log(number);
            break;
            case "dice":
                number = Math.sqrt(number);
                console.log(number);
            break;
            case "spice":
                number += 1;
                console.log(number);
            break;
            case "bake":
                number *= 3;
                console.log(number);
            break;
            case "fillet":
                number *= 0.80;
                console.log(number);
            break;
        }
    }
    
}

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')