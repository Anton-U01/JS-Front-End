function print(numbers,n){
    let i = 0;
    let j = 0;
    let newArr = new Array();
    while(numbers[i] != undefined){
        newArr[j] = numbers[i];
        j++;
        i += n;
    }
    return newArr;
}

print(['1', 
'2',
'3', 
'4', 
'5'], 
6
);