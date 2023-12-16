function solve (){
    const list = document.getElementById("list");
    const editBtn = document.getElementById("edit-weather");
    const loadBtn = document.getElementById("load-history");

    loadBtn.addEventListener('click', () => {
        fetch(`http://localhost:3030/jsonstore/tasks`)
        .then(response => response.json())
        .then( result => {
            list.innerHTML = "";
            Object.values(result).forEach(object => {
                console.log(object._id);
                let div = document.createElement("div");
                div.classList.add("container");
                div.innerHTML = `
                <h2>${object.location}</h2>
                <h3>${object.date}</h3>
                <h3 id="celsius">${object.temperature}</h3>
                `;
                let btnDiv = document.createElement("div");
                btnDiv.classList.add("buttons-container");
    
                let changeBtn = document.createElement("button");
                changeBtn.classList.add("change-btn");
                changeBtn.textContent = "Change";
                changeBtn.addEventListener('click',() => changeWeather(object));

                let deleteBtn = document.createElement("button");
                deleteBtn.classList.add("delete-btn");
                deleteBtn.textContent = "Delete";
                btnDiv.appendChild(changeBtn);
                btnDiv.appendChild(deleteBtn);
                div.appendChild(btnDiv);
                list.appendChild(div);
                
                editBtn.disabled = true;


            })
        })
    })

    function changeWeather(object) {
        location.value = object.location;
        temperature.value = object.temperature;
        date.value = object.date;
        const updatedObject = {
            location: location.value,
            temperature: temperature.value,
            date: date.value
        };

        editBtn.disabled = false;
        const addBtn = document.getElementById("add-weather");
        addBtn.disabled = true;
        
        editBtn.addEventListener("click", () => {
            fetch(`http://localhost:3030/jsonstore/tasks/${object._id}`, {
                method: "PUT",
                body: JSON.stringify(updatedObject)
            })
            .then(response => response.json())
            .then(result => {
                loadBtn.click();
                location.value = "";
                temperature.value = "";
                date.value = "";

                editBtn.disabled = true;
                addBtn.disabled = false;
            })
        })
    }

    const location = document.getElementById("location");
    const temperature = document.getElementById("temperature");
    const date = document.getElementById("date");
    
    document.getElementById("add-weather").addEventListener("click", () => {
        let newPlace = {
            location: location.value,
            temperature: temperature.value,
            date: date.value
        }
        
        fetch("http://localhost:3030/jsonstore/tasks/", {
            method:"POST",
            body: JSON.stringify(newPlace)
        })
        .then(response => response.json())
        .then(result => {
            fetch(`http://localhost:3030/jsonstore/tasks`)
        .then(response => response.json())
        .then( result => {
            list.innerHTML = "";
            Object.values(result).forEach(object => {
                let div = document.createElement("div");
                div.classList.add("container");
                div.innerHTML = `
                <h2>${object.location}</h2>
                <h3>${object.date}</h3>
                <h3 id="celsius">${object.temperature}</h3>
                `;
                let btnDiv = document.createElement("div");
                btnDiv.classList.add("buttons-container");
    
                let changeBtn = document.createElement("button");
                changeBtn.classList.add("change-btn");
                changeBtn.textContent = "Change";
                let deleteBtn = document.createElement("button");
                deleteBtn.classList.add("delete-btn");
                deleteBtn.textContent = "Delete";
                btnDiv.appendChild(changeBtn);
                btnDiv.appendChild(deleteBtn);
                div.appendChild(btnDiv);
                list.appendChild(div);
                
                editBtn.disabled = true;
            })
        })
        location.value = "";
        temperature.value = "";
        date.value = "";
        })
    })


    
}

solve();