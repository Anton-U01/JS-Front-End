function calc() {
    let n1 = Number(document.getElementById('num1').value);
    console.log(n1);
    let n2 = Number(document.getElementById('num2').value);
    let sum = n1 + n2;
    document.getElementById('sum').value = sum;
}
