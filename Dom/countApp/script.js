let count = 0;
// function plus() {
//     const display = document.getElementById('display');
//     count++;
//     display.innerText = count;
// }
// function minus() {
//     const display = document.getElementById('display');
//     count--;
//     display.innerText = count;
// }

const plusButton = document.getElementById('btn-plus');
plusButton.addEventListener('click', function () {
    const display = document.getElementById('display');
    count++;
    display.innerText = count;
})

const minusButton = document.getElementById('btn-minus');
minusButton.addEventListener('click', function () {
    const display = document.getElementById('display');
    count--;
    if(count < 0){
        return;
    }
    display.innerText = count;
})