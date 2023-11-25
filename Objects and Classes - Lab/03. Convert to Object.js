function solve (str){
    let object = JSON.parse(str);
    for(const entry of Object.entries(object)){
        const [key,value] = entry;
        console.log(`${key}: ${value}`);
    }
}