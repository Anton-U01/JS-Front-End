function solve (arr){
    let heroes = [];
    arr.forEach(el=> {
        let [name,level,items] = el.split(" / ");
        let heroe = {
            name,
            level,
            items
        }
        heroes.push(heroe);
    });
    heroes.sort( (a,b) => {
        return a.level - b.level;
    });
    for(const h of heroes){
        console.log(`Hero: ${h.name}`);
        console.log(`level => ${h.level}`);
        console.log(`items => ${h.items}`);
    }
    
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );