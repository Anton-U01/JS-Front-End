function findSmallestNumber(n1,n2,n3){
    let arr = [n1,n2,n3];
    return Math.min(...arr);
}

console.log(findSmallestNumber(2,
5,
3
));