function loading(number){
    let n = number / 10;
    if(n === 10){
        console.log(`${number}% Complete!`);
    } else{
        let percentStr = '%'.repeat(n);
        let dotStr = '.'.repeat(10 - n);
        console.log(`${number}% [${percentStr}${dotStr}]`);
        console.log("Still loading...");
    }
}

loading(30);