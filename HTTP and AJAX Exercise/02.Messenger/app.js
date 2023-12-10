function attachEvents() {
    const [author,content,sendBtn,refreshBtn] = document.querySelectorAll('input');
    const textArea = document.getElementById('messages');
    sendBtn.addEventListener('click', () => {
        const obj = {
            author: author.value,
            content: content.value
        }
        let isValid = author.value !== "" && content.value !== "";
        if(isValid){
            fetch(`http://localhost:3030/jsonstore/messenger`,{
                method:'POST',
                body: JSON.stringify(obj)
            })
        }
        author.value = "";
        content.value = "";
        
    })

    refreshBtn.addEventListener('click', async () => {
        let output = [];
        
        const response = await fetch(`http://localhost:3030/jsonstore/messenger`);
        const result = await response.json();

        Object.values(result).forEach(info => {
            output.push(`${info.author}: ${info.content}`);
        })
        textArea.textContent = output.join('\n');
    })
}

attachEvents();