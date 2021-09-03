let itemList = document.querySelector('#to-do-list');
let addInput = document.querySelector('#add-form input[type=text]');
let searchInput = document.querySelector('#search-form input[type=text]');
let addButton = document.querySelector('#add-form button');



itemList.addEventListener('click', (e)=>{
    if (e.target.matches('.delete-btn')){ //e.target.className == 'delete-btn'
        e.target.parentNode.remove();
        if (itemList.children.length === 0){
            let listEmptyMessage = document.createElement('div');
            listEmptyMessage.style.textAlign = 'center';
            listEmptyMessage.style.color = '#333';
            listEmptyMessage.innerText = 'List is empty';
            listEmptyMessage.setAttribute('id','emptyMessage');
            e.currentTarget.appendChild(listEmptyMessage);
        }
    }
});


addButton.addEventListener('click',(e)=>{
    e.preventDefault();
    if (!addInput.value){
        return;
    }else{
        if(itemList.children[0].id == 'emptyMessage'){ //or document.querySelector('emptyMessage')
            document.querySelector('#emptyMessage').remove();
        }
        let item = createItem(addInput.value);
        itemList.appendChild(item);
        addInput.value = '';
    }
});


function createItem(value) {
    let newItem = document.createElement('li');
    let title = document.createElement('span');
    let deleteBtn = document.createElement('span');
    newItem.classList.add('to-do-item');
    title.innerText = value;
    title.classList.add('title');
    deleteBtn.innerText = 'delete';
    deleteBtn.classList.add('delete-btn');
    newItem.appendChild(title);
    newItem.appendChild(deleteBtn);
    return newItem;
}


searchInput.addEventListener('input', (e)=>{
    if (!document.querySelector('#emptyMessage')){
        Array.from(itemList.children).forEach((element)=>{
            if (element.querySelector('.title').innerText.toLowerCase().includes(e.target.value.toLowerCase())){
                element.style.display = 'flex';
            }else {
                element.style.display = 'none';
            }
        });
    }else {
        return;
    }
});



















