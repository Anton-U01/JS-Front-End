function year(year){
    if(year % 4 == 0){
        if(year % 100 != 0){
            console.log("yes");
        } else {
            console.log ("no");
        }
    } else if (year % 400 == 0){
        console.log("yes");
    } else{
        console.log("no");
    }
}

year(1984);
year(2003);
year(4);