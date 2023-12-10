function attachEvents() {
    let loadBtn = document.getElementById('btnLoadPosts');
    let select = document.getElementById('posts');
    let viewBtn = document.getElementById('btnViewPost');
    let h1 = document.getElementById('post-title');
    let p = document.getElementById('post-body');
    let ul = document.getElementById('post-comments');
    let postId = "";
    let postTitle = "";
    let postBody = "";
    let allPosts = {};
    loadBtn.addEventListener('click', () => {
        fetch(`http://localhost:3030/jsonstore/blog/posts`)
        .then(response => response.json())
        .then(result => {
            allPosts = result;
            Object.keys(result).forEach(key => {
                let option = document.createElement('option');
                option.value = key;
                option.textContent = result[key].title;
                select.appendChild(option);
            })
        })
    })

    viewBtn.addEventListener('click', () => {
        fetch(`http://localhost:3030/jsonstore/blog/comments`)
        .then(response => response.json())
        .then(result => {
            h1.textContent = allPosts[select.value].title;
            p.textContent = allPosts[select.value].body;
            ul.innerHTML = "";
            let filtered = Object.values(result).filter( e => e.postId === select.value);
            filtered.forEach(comment => {
                let li = document.createElement('li');
                li.id = comment.id;
                li.textContent = comment.text;
                ul.appendChild(li);
            })
        })
    })
}

attachEvents();