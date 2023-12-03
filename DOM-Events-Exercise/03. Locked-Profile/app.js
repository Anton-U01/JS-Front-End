function lockedProfile() {
    let buttons = document.getElementsByTagName('button');
    for(const button of buttons){
        button.addEventListener('click',showInformation);
    }

    function showInformation(e){
        let btn = e.target;
        let profile = btn.parentElement;
        let unlockBtn = profile.getElementsByTagName('input')[1];
        let hiddenText = profile.children[9];
        debugger;
        if(unlockBtn.checked){
            if(btn.textContent === 'Show more'){
                hiddenText.style.display = 'block';
                btn.textContent = 'Hide it';
            } else if (btn.textContent === 'Hide it'){
                hiddenText.style.display = 'none';
                btn.textContent = 'Show more';
            }
            
        }
    }
}