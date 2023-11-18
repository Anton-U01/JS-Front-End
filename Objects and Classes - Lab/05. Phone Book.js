function solve(arr){
    let book = {};
    arr.forEach(element => {
        let info = element.split(" ");
        let name = info[0];
        let phone = info[1];
        book[name] = phone;
    });
    for(const entry of Object.entries(book)){
        const [key,value] = entry;
        console.log(`${key} -> ${value}`);
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);