function range(ch1,ch2){
    let start = ch1.charCodeAt();
    let end = ch2.charCodeAt();
    if(start > end){
        let temp = start;
        start = end;
        end = temp;
    }
    let arr = [];
    for(let i = start + 1; i < end; i++){
        arr.push(String.fromCharCode(i));
    }
    console.log(arr.join(" "));
}

range('C',
'#'
);