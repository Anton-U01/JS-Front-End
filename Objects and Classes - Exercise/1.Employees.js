function solve(arr){
    let employees = [];
    arr.forEach(element => {
       const name = element;
       const number = element.length;
       let employee = {
        name,
        number
       };
       employees.push(employee); 
    });
    employees.forEach(e => {
        console.log(`Name: ${e.name} -- Personal Number: ${e.number}`);
    })
}