function solve(arr){
    let towns = [];
    arr.forEach(element => {
        let [town,latitude,longitude] = element.split(" | ");
        let obj = {
            town,
            latitude:Number(latitude).toFixed(2),
            longitude:Number(longitude).toFixed(2)
        }
        towns.push(obj);
    });
    towns.forEach(t => console.log(t));
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);