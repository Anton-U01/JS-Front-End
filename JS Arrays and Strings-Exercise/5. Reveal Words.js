function reveal (stringWords,string){
    let words = stringWords.split(', ');
    let text = string.split(' ');
    for(let i = 0; i < words.length;i++){

        for(let j = 0; j < text.length; j++){
            if(text[j].includes('*') && text[j].length === words[i].length){
                text[j] = words[i];
            }
        }
    }

    console.log(text.join(" "));
}

reveal('great, learning',
'softuni is ***** place for ******** new programming languages'
);