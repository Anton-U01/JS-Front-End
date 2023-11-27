function solve() {
  let text = document.getElementById('input');
  let sentences = text.value.split('.');
  let div = document.getElementById('output');
  sentences = sentences.filter(s => s.length > 0).map(s => s += '.');
 
  while(sentences.length > 0){
    let p = document.createElement('p');    
    p.textContent =  sentences.splice(0,3).join('');
      div.appendChild(p);
  }
}