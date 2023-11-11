function addAndSubstract(n1,n2,n3){
    let sum = function(n1,n2){
        return n1 + n2;
    }

    let subtract = (sum,n3) =>{
        return sum(n1,n2) - n3;
    }
    console.log(subtract(sum,n3));
}

addAndSubstract(23,6,10);