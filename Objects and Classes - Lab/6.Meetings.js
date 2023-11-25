function solve (arr){
    let list = {};
    for(const e of arr){
        let info = e.split(" ");
        let day = info[0];
        let name = info[1];
        if(list.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        } else {
            list[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for(const e of Object.entries(list)){
        let [key,value] = e;
        console.log(`${key} -> ${value}`);
    }
}

solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);