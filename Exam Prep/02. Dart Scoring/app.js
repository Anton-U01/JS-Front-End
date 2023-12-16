
window.addEventListener("load", solve)

function solve() {
    const ul = document.getElementById("sure-list");
    let [player,score,round] = document.querySelectorAll("input");
    const addBtn = document.getElementById("add-btn");
    addBtn.addEventListener('click',() => {
      let li = document.createElement("li");
      li.classList.add("dart-item");
      li.innerHTML = `
      <article>
        <p>${player.value}</p>
        <p>${score.value}</p>
        <p>${round.value}</p>
      </article>
      `;
      const editBtn = document.createElement('button');
      editBtn.classList.add("edit");
      editBtn.classList.add("btn");
      editBtn.textContent = "edit";

      const okBtn = document.createElement('button');
      okBtn.classList.add("ok");
      okBtn.classList.add("btn");
      okBtn.textContent = "ok";

      li.appendChild(editBtn);
      li.appendChild(okBtn);
      ul.appendChild(li);

      player.value = "";
      score.value = "";
      round.value = "";
      addBtn.disabled = true;
    
      editBtn.addEventListener('click', () => {
        let person = editBtn.parentElement;
        let [name,scores,rounds] = person.querySelectorAll('p');
        
        player.value = name.textContent;
        score.value = scores.textContent;
        round.value = rounds.textContent;
        person.remove();
        addBtn.disabled = false;
      })

      okBtn.addEventListener("click", (e) => {
        let person = okBtn.parentElement;
        person.parentElement.removeChild(person);
        let scoreBoard = document.getElementById("scoreboard-list");

        scoreBoard.appendChild(person);
        
        let [name,scores,rounds] = person.querySelectorAll('p');
        const scoresValue = scores.textContent;
        scores.textContent = `Score: ${scoresValue}`;
        const roundsValue = rounds.textContent;
        rounds.textContent = `Score: ${roundsValue}`;

        editBtn.parentElement.removeChild(editBtn);
        okBtn.parentElement.removeChild(okBtn);
        addBtn.disabled = false;
       
      })
    })

    document.querySelector('.clear').addEventListener("click", () => {
      addBtn.disabled = false;
      player.value = "";
      score.value = "";
      round.value = "";
      ul.innerHTML = "";
      document.getElementById("scoreboard-list").innerHTML = "";
    })
  }
  