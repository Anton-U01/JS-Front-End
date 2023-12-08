function loadRepos() {
   let div = document.getElementById('res');

   fetch("https://api.github.com/users/testnakov/repos")
   .then(response => response.text())
   .then((text) => div.textContent = text
   )
   .catch((error) => console.error(error));
}