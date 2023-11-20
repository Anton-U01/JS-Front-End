function solve(input){
    let words = input.toLowerCase().split(" ");
    let list = {};
    words.forEach(element => {
        if(list[element]){
            list[element] += 1;
        } else {
            list[element] = 1;
        }
    });
    let output = "";
    Object.keys(list).forEach( k => {
        if(list[k] % 2 != 0) {
            output += k + " ";
        } 
    })
    console.log(output);
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');