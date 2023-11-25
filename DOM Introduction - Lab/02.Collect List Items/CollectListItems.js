function extractText() {
    let items = document.getElementsByTagName('li');
    let result = '';
    for (let index = 0; index < items.length; index++) {
            result += items[index].textContent + '\n';
        
    }
    console.log(result);
    document.getElementById('result').textContent = result;
}