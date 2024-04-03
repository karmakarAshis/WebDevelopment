const allButtons = document.getElementsByClassName('btn-seat');
let count = 0;

for (const button of allButtons) {
    button.addEventListener('click', function (e) {
        const seatNo = e.target.parentNode.childNodes[1].innerText;
        

        
        count++;
        setInnerText('selected-seat', count);
        setInnerText('available-seat', 40-count);
    });
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}