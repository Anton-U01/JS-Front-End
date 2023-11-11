 function validator(password){
    
    let isValidLength = (string) =>{
        if(string.length < 6 || string.length > 10){
            return false;
        } 
        return true;
    }
    let isAlphaNumeric = (string) =>{
        let regex = /^[a-zA-Z0-9]+$/gm;
        return regex.test(string);
    }
    let has2Digits = (string) =>{
        let digitsCount = 0;
        for(const c of string){
            if(c >= '0' && c <= '9'){
                digitsCount++;
            }
        }
        return digitsCount >= 2;
    }
    if(!isValidLength(password)){
        console.log("Password must be between 6 and 10 characters");
    }
    if(!isAlphaNumeric(password)){
        console.log("Password must consist only of letters and digits");
    }
    if(!has2Digits(password)){
        console.log("Password must have at least 2 digits");
    }
    if(isValidLength(password) && isAlphaNumeric(password) && has2Digits(password)){
        console.log("Password is valid")
    }
}

validator('Pa$s$s');