function addItem() {
    const inputField = document.getElementById('newItemText');
    const itemsList = document.getElementById('items');
    const newItem = document.createElement("li");
    newItem.textContent = inputField.value;
    const deleteButton = document.createElement("a");
    deleteButton.href = '#';
    deleteButton.text = '[Delete]';
    newItem.appendChild(deleteButton);
    itemsList.appendChild(newItem);
    inputField.value = '';
    deleteButton.addEventListener('click',remove);
    function remove(e){
        const target = e.currentTarget;
        target.parentElement.remove(target);
    }
}
