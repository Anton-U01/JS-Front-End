function palindromeOfArr(arr){
    let palindrome = (number) =>{
        let string = number.toString();
        let toArr = string.split("");
        if(toArr.reverse().join("") == string){
            return true;
        }
        return false;
    }
    for(const element of arr){
        console.log(palindrome(element));
    }
}


palindromeOfArr([32,2,232,1010]);