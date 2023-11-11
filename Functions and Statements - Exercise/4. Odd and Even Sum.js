function oddAndEvenSum(number){
    let oddSum = 0;
    let evenSum = 0;
    let digit;
    let stringNum = number.toString();
    for(let i = 0; i < stringNum.length;i++){
        digit = parseInt(stringNum.charAt(i));
        if(digit % 2 == 0){
            evenSum += digit;
        } else{
            oddSum += digit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum( 3495892137259234);