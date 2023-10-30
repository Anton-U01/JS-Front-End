function printNumbersBetween(n1,n2){
    let sum = 0;
    let buff = "";
    for(let i = n1; i <= n2; i++){
        sum += i;
        buff += i + " ";
    }
    console.log(buff);
    console.log(`Sum: ${sum}`);
}
printNumbersBetween(5,10);