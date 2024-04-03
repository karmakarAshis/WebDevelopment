const placesList = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'pahatoli bon';
placesList.appendChild(li);

// 1 where to add
const mainContainer = document.getElementById('main-container');
// 2 what to do
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'my Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'birani'
ul.appendChild(li1)

const li2 = document.createElement('li');
li2.innerText = 'borhanio'
ul.appendChild(li2)

const li3 = document.createElement('li');
li3.innerText = 'salad'
ul.appendChild(li3)

section.appendChild(ul)

mainContainer.appendChild(section);