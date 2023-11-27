function solve() {
    let input = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;
    input = input.toLowerCase();
    let words = input.split(" ");
    let result = "";
    if(convention === 'Pascal Case'){
      for(let i = 0; i < words.length; i++){
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
    } else if (convention === 'Camel Case'){
      result += words[0];
      for(let i = 1; i < words.length; i++){
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
    } else{
      result = 'Error!';
    }
    document.getElementById('result').innerText = result;
}