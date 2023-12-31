function roadRadar(speed, area){
   if(area == "motorway"){
        if(speed <= 130){
            console.log(`Driving ${speed} km/h in a 130 zone`);
        } else {
            let difference = Math.abs(130 - speed);
            if(difference <= 20){
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - speeding`);
            } else if (difference <= 40){
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - excessive speeding`);
            } else{
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - reckless driving`);
            }
        }
   } else if(area == "interstate"){
    if(speed <= 90){
        console.log(`Driving ${speed} km/h in a 90 zone`);
    } else {
        let difference = Math.abs(90 - speed);
        if(difference <= 20){
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - speeding`);
        } else if (difference <= 40){
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - excessive speeding`);
        } else{
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - reckless driving`);
        }
    }
} else if(area == "city"){
    if(speed <= 50){
        console.log(`Driving ${speed} km/h in a 50 zone`);
    } else {
        let difference = Math.abs(50 - speed);
        if(difference <= 20){
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - speeding`);
        } else if (difference <= 40){
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - excessive speeding`);
        } else{
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - reckless driving`);
        }
    }
} else if(area == "residential"){
    if(speed <= 20){
        console.log(`Driving ${speed} km/h in a 20 zone`);
    } else {
        let difference = Math.abs(20 - speed);
        if(difference <= 20){
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - speeding`);
        } else if (difference <= 40){
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - excessive speeding`);
        } else{
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - reckless driving`);
        }
    }
}
}

roadRadar(120, 'interstate');