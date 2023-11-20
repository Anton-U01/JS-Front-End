function solve(arr){
    let words = arr.shift().split(" ");
    let list = {};
    words.forEach(w => {
        list[w] = 0;

        arr.forEach(element => {
            if(w === element){
             list[element]++;
            }
         });
    });


    Object.keys(list).sort((a,b) => {
        return list[b] - list[a]; 
    }).forEach(k => {
        console.log(`${k} - ${list[k]}`);
    })
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );