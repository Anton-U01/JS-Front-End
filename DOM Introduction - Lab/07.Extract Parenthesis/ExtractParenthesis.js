function extract(content) {
    let regex = /\((.+?)\)/g;
    let match = regex.exec(document.getElementById(content).textContent);
    let result = [];
    while(match !== null){
        result.push(match[1]);
        match = regex.exec(document.getElementById(content).textContent) 
    }
    console.log(match);
}