function hashtag(string){
    let words = string.split(" ");
    let specialWords = [];
    for(const element of words){
        if(element.startsWith('#') && element.length > 1){
            specialWords.push(element);
        }
    };
    let regex = /[\d]/g;
    for(let i = 0; i < specialWords.length; i++){
        if(regex.test(specialWords[i])){
            continue;
        } else{
            let newWord = specialWords[i].substring(1,specialWords[i].length);
            console.log(newWord);
        }
    }
    
}
hashtag('The symbol # is known #variously in English-speaking #regions as the #number sign');