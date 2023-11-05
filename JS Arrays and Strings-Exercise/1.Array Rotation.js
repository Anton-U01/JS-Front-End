function rotation (numbers,n){
    let item;
    for(let i = 0; i < n; i++){
        item = numbers.shift();
        numbers.push(item);
    }
    console.log(numbers.join(" "));
}

rotation([51, 47, 32, 61, 21], 2);