

const items = document.getElementsByClassName('item');
// console.log(item);

// for(const item of items){
//     item.addEventListener('click', function(event){
//       event.target.parentNode.removeChild(event.target);
//     })
// }

const container = document.querySelector('.container');
container.addEventListener('click', function(event){
    // event.stopImmediatePropagation();
    event.target.parentNode.removeChild(event.target);
})

const itemsAddButton = document.getElementById('button');
// console.log(itemsAddButton);
itemsAddButton.addEventListener('click', function(){
    const container = document.querySelector('.container');
    const li = document.createElement('li');
    li.innerText = 'add new item';
    li.className = 'item'
    container.appendChild(li);
})



