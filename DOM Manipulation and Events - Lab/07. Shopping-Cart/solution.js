function solve() {
   let products = document.getElementsByClassName('product');
   const buttons = document.querySelectorAll('.add-product');
   const result = document.querySelector('textarea');
   const checkButton = document.querySelector("button.checkout");
   for(const button of buttons){
      button.addEventListener('click',addInBag);
   }
   const elements = {
      Bread: Number(0.80),
      Milk: Number(1.09),
      Tomatoes: Number(0.99),
   }
   let boughtProducts = [];
   let sum = 0;
   function addInBag(e){
      const targetTitle = e.currentTarget.parentNode.parentNode.querySelector('.product-title').textContent;
      if(!boughtProducts.includes(targetTitle)){
         boughtProducts.push(targetTitle);
      }
      const price = elements[targetTitle];
      result.textContent += `Added ${targetTitle} for ${price.toFixed(2)} to the cart.\n`;
      sum += price;
   }
   checkButton.addEventListener('click',checkOut);
   function checkOut(e){
      result.textContent += `You bought ${boughtProducts.join(', ')} for ${sum.toFixed(2)}.`;
      for(const button of document.querySelectorAll('button')){
         button.disabled = true;
      }
   }
   
}