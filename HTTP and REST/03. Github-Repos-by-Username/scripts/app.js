function loadRepos() {
	let inputField = document.getElementById('username');
	let url = 'https://api.github.com/users/';
	let repoList = document.getElementById('repos');
	repoList.innerHTML = "";
	fetch(`${url}${inputField.value}/repos`)
	.then(response => response.json())
	.then(data => data.forEach(element => {
		let a = document.createElement('a');
		a.href = element.html_url;
		a.textContent = element.full_name;
		let li = document.createElement('li');
		li.appendChild(a);
		repoList.appendChild(li);
	}))
	.catch(error => {
		let li = document.createElement('li');
		li.textContent = error;
		repoList.appendChild(li);
	})
}