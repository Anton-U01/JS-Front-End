function sumTable() {
    let arr = document.querySelectorAll('tr td:nth-child(2)');
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += Number(arr[i].textContent);
    }
    document.getElementById('sum').textContent = sum;
}