
// Dom Manipulation

// GetElementById() 
// const title = document.getElementById('main-heading');
// console.log(title);

// GetElementByClassName() 
// const listItems = document.getElementsByClassName('list-items');
// console.log(listItems);

// GetElementByTagName() 
// const listItems = document.getElementsByTagName('li');
// console.log(listItems);

// querySelector() 
// const container = document.querySelector('div');
// console.log(container);

// querySelectorAll() 
// const container = document.querySelectorAll('div');
// console.log(container);

// css styling from app.js 


// const title = document.querySelector('#main-heading');
// title.style.color = "red";
// console.log(title);

// const listItems = document.querySelectorAll('.list-items');
// for( i = 0; i < listItems.length; i++){
//     listItems[i].style.fontSize = '5rem'
// }
// console.log(listItems);

// Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li);//Adding Element

// const firstListItem = document.querySelector('.list-items');//Modifying the test
// console.log(firstListItem)
// console.log(firstListItem.innerText)
// console.log(firstListItem.innerHTML)
// console.log(firstListItem.textContent)

li.innerText = "X-men";

// Modifying Attribute & classes
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');
