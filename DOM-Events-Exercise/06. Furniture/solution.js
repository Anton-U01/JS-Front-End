function solve() {
    let inputText = document.getElementsByTagName('textarea')[0];
    let generateBtn = document.getElementsByTagName('button')[0];
    let body = document.querySelector('tbody');
    
    generateBtn.addEventListener('click',generateElement);

    function generateElement(e){
      let elements = JSON.parse(inputText.value);
      for(const element of elements){
        let newGeneralTr = document.createElement('tr');

        let imgTd = document.createElement('td');
        let img = document.createElement('img');
        img.src = element['img'];
        imgTd.appendChild(img);
        newGeneralTr.appendChild(imgTd);

        let p = document.createElement('p');
        p.textContent = element['name'];
        let nameTd = document.createElement('td');
        nameTd.appendChild(p);
        newGeneralTr.appendChild(nameTd);

        let pPrice = document.createElement('p');
        pPrice.textContent = element['price'];
        let priceTd = document.createElement('td');
        priceTd.appendChild(pPrice);
        newGeneralTr.appendChild(priceTd);

        let pDecFactor = document.createElement('p');
        pDecFactor.textContent = element['decFactor'];
        let decFactorTd = document.createElement('td');
        decFactorTd.appendChild(pDecFactor);
        newGeneralTr.appendChild(decFactorTd);

        let markInput = document.createElement('input');
        markInput.type = 'checkbox';
        markInput.disabled = false;
        let markTd = document.createElement('td');
        markTd.appendChild(markInput);
        newGeneralTr.appendChild(markTd);

        body.appendChild(newGeneralTr);
      }
    }

    let buyBtn = document.getElementsByTagName('button')[1];
    buyBtn.addEventListener('click',buyFurniture);

    function buyFurniture(e){
      let checkBoxes = Array.from(document.querySelectorAll('input'));
      let boughtFurnitures = [];
      let totalPrice = 0;
      let avgFactor = 0;
      let itemsCount = 0;
      for(const checkBox of checkBoxes){
        if(checkBox.checked === true){
          let item = checkBox.parentElement.parentElement;
          let name = item.querySelectorAll('td')[1];
          boughtFurnitures.push(name.textContent);

          let price = item.querySelectorAll('td')[2];
          totalPrice += Number(price.textContent);

          let decFactor = item.querySelectorAll('td')[3];
          avgFactor += Number(decFactor.textContent);
          itemsCount++;
        }
      }
      let outputText = document.getElementsByTagName('textarea')[1];
      outputText.value += `Bought furniture: ${boughtFurnitures.join(', ')}\n`;
      outputText.value += `Total price: ${totalPrice.toFixed(2)}\n`;
      outputText.value += `Average decoration factor: ${avgFactor / itemsCount}`;
    }
}