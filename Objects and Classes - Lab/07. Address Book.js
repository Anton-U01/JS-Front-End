function addressBook(arr){
    let list = {};
    for(const e of arr){
        let info = e.split(":");
        let name = info[0];
        let address = info[1];
        list[name] = address;
    }
    Object.keys(list).sort().forEach(key =>{
        console.log(`${key} -> ${list[key]}`);
    });
    
}

addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);