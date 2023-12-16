function solve(){
    const loadBtn = document.getElementById("load-vacations");
    const list = document.getElementById("list");
    const editBtn = document.getElementById("edit-vacation");
    const addBtn = document.getElementById("add-vacation");
    
    //inputField
    const nameInput = document.getElementById('name');
    const daysInput = document.getElementById('num-days');
    const dateInput = document.getElementById('from-date')

    loadBtn.addEventListener('click',() => {
        getRequest();
    })

    addBtn.addEventListener("click",(e) => {
        e.preventDefault();
        const newObject = {
            name: nameInput.value,
            date: dateInput.value,
            days: daysInput.value
        }
        fetch("http://localhost:3030/jsonstore/tasks/",{
            method:"POST",
            body: JSON.stringify(newObject),
        })
        .then(getRequest())
        .then(result => {
            clearInputFields();
        })
    })

    editBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = document.querySelector("form").getAttribute("id-object");
        
        const updatedElment = {
            name: nameInput.value,
            date: dateInput.value,
            days: daysInput.value,
            _id: id
        }
        fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
            method: "PUT",
            body: JSON.stringify(updatedElment)
        })
        .then(getRequest())
        .then(result => {
            clearInputFields();
            editBtn.disabled = true;
            addBtn.disabled = false;
        })
        
    })

    function clearInputFields(){
        nameInput.value = "";
        dateInput.value = "";
        daysInput.value = "";
    }

    function getRequest(){
        list.innerHTML = "";

        fetch("http://localhost:3030/jsonstore/tasks/")
        .then(response => response.json())
        .then(result =>  { 
            Object.values(result).forEach(object => loadObject(object));
            editBtn.disabled = true;
        });
    }

    function loadObject(object){
        const div = document.createElement('div');
        div.classList.add("container");

        const h2Name = document.createElement("h2");
        h2Name.textContent = `${object.name}`;
        const h3date = document.createElement("h3");
        h3date.textContent = `${object.date}`;
        const h3Count = document.createElement("h3");
        h3Count.textContent = `${object.days}`;
        const changeBtn = document.createElement('button');
        changeBtn.classList.add("change-btn");
        changeBtn.textContent = "Change";
        changeBtn.addEventListener("click",() => {
            //info to inputFields
            nameInput.value = object.name;
            dateInput.value = object.date;
            daysInput.value = object.days;
            document.querySelector("form").setAttribute("id-object",`${object._id}`);
            //remove element from DOM
            div.remove();
            //activate editBtn deact addBtn
            editBtn.disabled = false;
            addBtn.disabled = true;
        })

        const doneBtn = document.createElement('button');
        doneBtn.classList.add("done-btn");
        doneBtn.textContent = "Done";
        doneBtn.addEventListener("click", () => {
            fetch(`http://localhost:3030/jsonstore/tasks/${object._id}`, {
                method: "DELETE"
            })
            .then(getRequest())
            .then(result => {
                div.remove();
            })
        })

        div.appendChild(h2Name);
        div.appendChild(h3date);
        div.appendChild(h3Count);
        div.appendChild(changeBtn);
        div.appendChild(doneBtn);

        list.appendChild(div);
    }
}

solve();