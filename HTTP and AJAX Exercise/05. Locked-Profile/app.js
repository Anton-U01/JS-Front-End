function lockedProfile() {
    let main = document.getElementById('main');

    fetch(`http://localhost:3030/jsonstore/advanced/profiles`)
    .then(response => response.json())
    .then(result => {
        let counter = 0;
        Object.values(result).forEach(profile => {
            counter++;
            let newDiv = document.createElement('div');
            newDiv.classList.add("profile");
            newDiv.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user${counter}Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user${counter}Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user${counter}Username" value="${profile.username}" disabled readonly />
				<div class="user${counter}Username">
					<hr>
					<label>Email:</label>
					<input type="email" name="user${counter}Email" value="${profile.email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user${counter}Age" value="${profile.age}" disabled readonly />
				</div>
				
            `;
            main.appendChild(newDiv);

            let button = document.createElement('button');
            button.textContent = "Show more";
            newDiv.appendChild(button);

            const hiddenDiv = document.querySelector(`.user${counter}Username`);
            hiddenDiv.style.display = "none";
            const lockBtn = button.parentNode.children[2];
            
            button.addEventListener('click', () => {
               if(!lockBtn.checked && button.textContent === "Show more"){
                    hiddenDiv.style.display = "block";
                    button.textContent = "Hide it";
               } else if (!lockBtn.checked && button.textContent === "Hide it"){
                    hiddenDiv.style.display = "none";
                    button.textContent = "Show more";
               }
            })
        })
    });

}