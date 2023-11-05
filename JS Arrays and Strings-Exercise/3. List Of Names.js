function names(names){
    names.sort((a,b) => { return a.localeCompare(b)});
    let i = 1;
    names.forEach(element => {
        console.log(i + `.${element}`);
        i++;
    });
}

names(["John", "Bob", "Christina", "Ema"]);