function colorize() {
    let tdArr = document.querySelectorAll('tr:nth-child(even)');
    console.log(tdArr);
    for(let i = 0; i < tdArr.length; i++){
        tdArr[i].style.backgroundColor = 'teal';
    }
}