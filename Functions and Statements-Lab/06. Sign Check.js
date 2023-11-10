function checkSign(n1,n2,n3){
    let negativesCount = 0;
    if(n1 < 0){
        negativesCount++;
    }
    if(n2 < 0){
        negativesCount++;
    }
    if(n3 < 0){
        negativesCount++;
    }
    if (negativesCount % 2 != 0){
        console.log("Negative");
    } else {
        console.log("Positive");
    }
}

checkSign( -6,
    -12,
     14    
   )