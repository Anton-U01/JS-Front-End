function solve (arr){
    let cars = [];
    arr.forEach(element => {
       let [command,number] = element.split(", "); 
        if(command === "IN" && !cars.includes(number)){
            cars.push(number);
        } else if (command === "OUT" && cars.includes(number)){
            let index = cars.indexOf(number);
            cars.splice(index,1);
        }
    });
    if(cars.length === 0){
        console.log("Parking Lot is Empty");
    } else{
        cars.sort((a,b) => {
            return a.localeCompare(b);
        });
        for(const car of cars){
            console.log(car);
        }
    }
}

solve (['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']

);