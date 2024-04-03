console.log('fast js');
const alLi = document.getElementsByTagName('li');
console.log(alLi);

// for (const li of alLi) {
//     console.log(li.innerText);
// }

const alTitle = document.getElementsByClassName('section-title');
console.log(alTitle);

// for (const title of alTitle) {
//     console.log(title.innerText);
// }

const thirdSection = document.getElementById('thirdSection');
console.log(thirdSection);

// document.querySelectorAll
// document.querySelector

const siz = document.getElementById('sisz');
console.log(siz.innerText);
siz.style.fontSize = '30px';