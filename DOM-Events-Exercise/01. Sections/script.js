function create(words) {
   let mainDiv = document.getElementById('content');
  
   for(const word of words){
      let newDiv = document.createElement('div');
      let newP = document.createElement('p');
      newP.textContent = word;
      newP.style.display = 'none';
      newDiv.appendChild(newP);
      mainDiv.appendChild(newDiv);
      newDiv.addEventListener('click', () => {
        newP.style.display = '';
      })
   }


}