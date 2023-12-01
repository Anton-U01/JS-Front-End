function addItem() {
    const inputField = document.getElementById('newItemText');
    const itemsList = document.getElementById('items');
    const newItem = document.createElement("li");
    newItem.textContent = inputField.value;
    itemsList.appendChild(newItem);
    inputField.value = '';
}