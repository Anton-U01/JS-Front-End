function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change',validate);
    
    function validate(e){
        const regex = /[a-z]+@[a-z]+.[a-z]+/g;
        if(!regex.test(e.currentTarget.value)){
            e.currentTarget.classList.add('error');
        } else{
            e.currentTarget.classList.remove('error');
        }
    }
}