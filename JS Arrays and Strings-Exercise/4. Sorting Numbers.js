function sorting(numbers){
    let newArr = new Array();
    numbers.sort((a,b) => a - b);
    while(numbers.length != 0){
        newArr.push(numbers.shift());
        newArr.push(numbers.pop());
    }
   return newArr;
}

sorting ([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);