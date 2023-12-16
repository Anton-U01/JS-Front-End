function solve(input){
    const n = input.shift();
    let astronauts = [];
    for(let i = 0; i < n; i++){
        const line = input.shift();
        let [name,oxygen,energy] = line.split(" ");
        const astronaut = {
            name,
            oxygen: Number(oxygen),
            energy: Number(energy)
        };
        astronauts.push(astronaut);
    }
    let commandInfo = input.shift();
    while(commandInfo !== "End"){
        let [command,name,amount] = commandInfo.split(' - ');
        amount = Number(amount);
        const person = astronauts.find(astronaut => astronaut.name === name);
        switch(command){
            case "Explore":
            if(Number(person.energy) - Number(amount) >= 0){
                person.energy -= amount;
                console.log(`${person.name} has successfully explored a new area and now has ${person.energy} energy!`);
            } else {
                console.log(`${person.name} does not have enough energy to explore!`);
            }
            break;
            case "Refuel":
                if(Number(amount) + Number(person.energy) > 200){
                    amount = 200 - person.energy;
                    person.energy = 200;
                } else{
                    person.energy += amount; 
                }
                console.log(`${person.name} refueled their energy by ${amount}!`);
            break;
            case "Breathe":
                if(Number(amount) + Number(person.oxygen) > 100){
                    amount = 100 - person.oxygen;
                    person.oxygen = 100;
                } else{
                    person.oxygen += amount; 
                }
                console.log(`${name} took a breath and recovered ${amount} oxygen!`);
            break;
        }

        commandInfo = input.shift();
    }
    astronauts.forEach( a => {
        console.log(`Astronaut: ${a.name}, Oxygen: ${a.oxygen}, Energy: ${a.energy}`);
    })
}

solve([    '4',
'Alice 60 100',
'Bob 40 80',
'Charlie 70 150',
'Dave 80 180',
'Explore - Bob - 60',
'Refuel - Alice - 30',
'Breathe - Charlie - 50',
'Refuel - Dave - 40',
'Explore - Bob - 40',
'Breathe - Charlie - 30',
'Explore - Alice - 40',
'End']

);