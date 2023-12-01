function deleteByEmail() {
    const inputField = document.getElementsByName('email')[0];
    const people = document.querySelectorAll('tbody tr');
    const result = document.getElementById('result');
    let info = inputField.value;
    for(const person of people){
        if(person.textContent.includes(info)){
            person.parentElement.removeChild(person);
            result.textContent = 'Deleted.';
            return;
        }
    }
    result.textContent = 'Not found.';
}