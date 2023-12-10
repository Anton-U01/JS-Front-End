function attachEvents() {
    let submitBtn = document.getElementById("submit");
    let tbody = document.querySelector('tbody');

    submitBtn.addEventListener("click", loadStudent);
    
    fetch(`http://localhost:3030/jsonstore/collections/students`)
    .then(response => response.json())
    .then(students => {
      Object.values(students).forEach(student => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${student.firstName}</th>
        <th>${student.lastName}</th>
        <th>${student.facultyNumber}</th>
        <th>${student.grade}</th>`;
        tbody.appendChild(tr);
      })
    })

    function loadStudent(){
        console.log("dasds");
        const [firstName,lastName,facultyNumber,grade] = document.querySelectorAll("input");
        const student = {
          firstName: firstName.value,
          lastName: lastName.value,
          facultyNumber: facultyNumber.value,
          grade: grade.value
        }
        console.log(firstName.value);
        fetch(`http://localhost:3030/jsonstore/collections/students`,{
          method: "POST",
          body: JSON.stringify(student)
        })
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${student.firstName}</th>
        <th>${student.lastName}</th>
        <th>${student.facultyNumber}</th>
        <th>${student.grade}</th>`;
        tbody.appendChild(tr);
        firstName.value = "";
        lastName.value = "";
        facultyNumber.value = "";
        grade.value = "";
    }
}


attachEvents();