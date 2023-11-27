function subtract() {
    let n1 = Number(document.getElementById('firstNumber').value);
    let n2 = Number(document.getElementById('secondNumber').value);
    let subtract = n1 - n2;
    document.getElementById('result').innerText = subtract;
}