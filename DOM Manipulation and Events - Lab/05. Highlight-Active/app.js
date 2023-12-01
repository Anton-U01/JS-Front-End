function focused() {
    let sections = Array.from(document.querySelectorAll('input'));
    for(const field of sections){
        field.addEventListener("focus",highlightSection);
        field.addEventListener("blur",clearSection);
    }

    function highlightSection(e){
        const target = e.currentTarget;
        target.parentNode.classList.add('focused');
    }
    function clearSection(e){
        const target = e.currentTarget;
        target.parentNode.classList.remove('focused');
    }
}