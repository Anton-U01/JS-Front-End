function loadCommits() {
    let usernameField = document.getElementById('username');
    let repoField = document.getElementById('repo');
    let url = `https://api.github.com/repos/`;
    let commitsList = document.getElementById('commits');

    fetch(`${url}${usernameField.value}/${repoField.value}/commits`)
    .then(response => response.json())
    .then(data => data.forEach( e => {
        let li = document.createElement('li');
        li.textContent = `${e.commit.author.name}: ${e.commit.message}`;
        commitsList.appendChild(li);
    }))
    .catch(error => {
        let li = document.createElement('li');
        li.textContent = `Error: ${error.statys}: (Not Found)`;
        commitsList.appendChild(li);
    })
    
}