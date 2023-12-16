function solve(){
    const list = document.getElementById("list");
    const editCourseBtn = document.getElementById("edit-course");
    const addCourseBtn = document.getElementById("add-course");
    //input Fields
    const nameField = document.getElementById("course-name");
    const typeField = document.getElementById("course-type");
    const descriptionField = document.getElementById("description");
    const teacherField = document.getElementById("teacher-name");

    document.getElementById("load-course").addEventListener('click',loadContent);
    function loadContent(){
        list.innerHTML = "";
        fetch("http://localhost:3030/jsonstore/tasks/")
        .then(response => response.json())
        .then(result => {
            Object.values(result).forEach(object => displayObject(object));
            editCourseBtn.disabled = true;
        })
    }

    function displayObject(object){
        const div = document.createElement("div");
        div.classList.add("container");
        div.innerHTML = `
        <h2>${object.title}</h2>
        <h3>${object.teacher}</h3>
        <h3>${object.type}</h3>
        <h4>${object.description}</h4>
        `;
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit Course";
        editBtn.classList.add("edit-btn");
        div.appendChild(editBtn);
        editBtn.addEventListener("click",(e) => {
            e.preventDefault();
            div.remove();
            nameField.value = object.title;
            typeField.value = object.type;
            teacherField.value = object.teacher;
            descriptionField.value = object.description;
            document.querySelector("form").setAttribute("id-object",`${object._id}`);
            editCourseBtn.disabled = false;
            addCourseBtn.disabled = true;
        })


        const finishBtn = document.createElement("button");
        finishBtn.textContent = "Finish Course";
        finishBtn.classList.add("finish-btn");
        div.appendChild(finishBtn);
        finishBtn.addEventListener("click", () => {
            fetch(`http://localhost:3030/jsonstore/tasks/${object._id}`,{
                method: "DELETE",
            })
            .then(loadContent())
            .then(result => {
                div.remove();
            })
        })

        list.appendChild(div);
    }

    
    addCourseBtn.addEventListener("click",(e) => {
        e.preventDefault();

        if(typeField.value !== "Long" && typeField.value !== "Medium" && typeField.value !== "Short"){
            return;
        }
        if(!nameField.value || !teacherField.value || !descriptionField.value){
            return;
        }
        const newObject = {
            title: nameField.value,
            type: typeField.value,
            description: descriptionField.value,
            teacher: teacherField.value,
        }
        
        fetch("http://localhost:3030/jsonstore/tasks/",{
            method: "POST",
            body: JSON.stringify(newObject)
        })
        .then(loadContent())
        .then(result => {
            nameField.value = "";
            typeField.value = "";
            descriptionField.value = "";
            teacherField.value = "";
        })
    })

    editCourseBtn.addEventListener("click",(e) => {
        e.preventDefault();
        const objID = document.querySelector("form").getAttribute("id-object");
        const updatedElment = {
            title: nameField.value,
            type: typeField.value,
            description: descriptionField.value,
            teacher: teacherField.value,
            _id: objID
        }

        fetch(`http://localhost:3030/jsonstore/tasks/${objID}`,{
            method: "PUT",
            body: JSON.stringify(updatedElment),
        })
        .then(loadContent())
        .then(resul => {
            nameField.value = "";
            typeField.value = "";
            descriptionField.value = "";
            teacherField.value = "";
            editCourseBtn.disabled = true;
            addCourseBtn.disabled = false;
            document.querySelector("form").removeAttribute("id-object");
        })
    })
    
}

solve();