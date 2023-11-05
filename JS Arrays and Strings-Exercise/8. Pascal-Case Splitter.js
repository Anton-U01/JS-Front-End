function splitter(text){
    let regex = /[A-Z][a-z]*/g;
    let words = text.match(regex);
    console.log(words.join(", "));
}

splitter('HoldTheDoor');