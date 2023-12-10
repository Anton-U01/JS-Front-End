function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click',displayContants);
    document.getElementById('btnCreate').addEventListener('click',createContact);

    async function displayContants(){
        let ul = document.getElementById('phonebook');
        ul.innerHTML = "";
        const response = await fetch(`http://localhost:3030/jsonstore/phonebook`);
        const result = await response.json();
        Object.values(result).forEach(info => {
            let li = document.createElement('li');
            li.textContent = `${info.person}: ${info.phone}`;
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete";
            li.appendChild(deleteBtn);
            ul.appendChild(li);
            deleteBtn.addEventListener("click",deleteFunction);

            function deleteFunction(){
                fetch(`http://localhost:3030/jsonstore/phonebook/${info._id}`,{
                    method:'DELETE',
                });
                li.remove();
            }
        })
    }

    function createContact(){
        const person = document.getElementById('person').value;
        const phone = document.getElementById('phone').value;
        const contact = {
            person,
            phone
        }
        fetch(`http://localhost:3030/jsonstore/phonebook`, {
            method:'POST',
            body:JSON.stringify(contact)
        })
        .then(response => response.json())
        .then(result => {
            displayContants();
        })
        person.value = "";
        phone.value = "";
    }
}

attachEvents();