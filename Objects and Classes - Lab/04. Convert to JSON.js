function solve(name,lastName,hairColor){
    let obj = {
        name,
        lastName,
        hairColor
    };
    let objToJSON = JSON.stringify(obj);
    console.log(objToJSON);
}

solve('George', 'Jones', 'Brown');