function vacantion(people,type,day){
    let price = 0.0;
    let totalPrice = 0;
    if(type == "Students"){
        if(day == "Friday"){
            price = 8.45;
        } else if (day == "Saturday"){
            price = 9.80;
        } else if ("Sunday"){
            price = 10.46;
        }
        totalPrice = people * price;
        if(people >= 30){
            totalPrice = totalPrice - 0.15 * totalPrice;
        }
    } else if(type == "Business"){
        if(day == "Friday"){
            price = 10.90;
        } else if (day == "Saturday"){
            price = 15.60;
        } else if ("Sunday"){
            price = 16;
        }
        totalPrice = people * price;
        if(people >= 100){
            totalPrice -= 10 * price;
        }
    } else if(type == "Regular"){
        if(day == "Friday"){
            price = 15;
        } else if (day == "Saturday"){
            price = 20;
        } else if ("Sunday"){
            price = 22.50;
        }
        totalPrice = people * price;
        if(people >= 10 &&  people <= 20){
            totalPrice -= totalPrice * 0.05;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacantion(40,
    "Regular",
    "Saturday"
    );