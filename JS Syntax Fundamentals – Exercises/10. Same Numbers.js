function sameNumbers(number){
    let string = String(number);
    let firstChar = string[0];
    let areSame = true;
    let sum = Number(firstChar);
    for(let i = 1; i < string.length; i++){
        sum += Number(string[i]);
        if(string[i] != firstChar){
            areSame = false;
        }
    }
    console.log(areSame);
    console.log(sum);
}

sameNumbers(2222222);