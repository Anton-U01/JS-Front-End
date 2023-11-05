function substring(word,text){
    let wordToFind = word.toLowerCase();
    let words = text.split(" ");
    for(const e of words){
        if(e.toLowerCase() === wordToFind){
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
}

substring('javascript',
'JavaScript is the best programming language'
)