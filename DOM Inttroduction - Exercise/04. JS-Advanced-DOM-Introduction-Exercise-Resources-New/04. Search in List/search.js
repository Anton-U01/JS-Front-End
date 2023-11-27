function search() {
   let li = document.getElementsByTagName('li');
   let input = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let count = 0;
   for (let i = 0; i < li.length; i++) {
      if (li[i].innerText.includes(input)) {
         li[i].style.fontWeight = 'bolder';
         li[i].style.textDecoration = 'underline';
         count++;
      }
   }
   result.innerText = `${count} matches found`;
}
