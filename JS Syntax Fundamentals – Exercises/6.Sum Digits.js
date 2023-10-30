function sumOfDigits(number){
    let string = String(number);
    let sum = 0;
    for(let i = 0; i < string.length;i++){
        let digit = Number(string[i]);
        sum += digit;
    }
    console.log(sum);
}

sumOfDigits(245678);