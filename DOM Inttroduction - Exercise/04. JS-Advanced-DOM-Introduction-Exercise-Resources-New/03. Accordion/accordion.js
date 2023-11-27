function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let extra = document.getElementById('extra');
    if(button.textContent.toLowerCase() === 'more'){
        button.textContent = 'Less';
        extra.style.display = 'block';
    } else if (button.textContent.toLowerCase() === 'less'){
        button.textContent = 'More';
        extra.style.display = 'none';
    }
}