const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard() {
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}

function reset(){
    // document.getElementById(diamonds).style.color = gray;
    // document.getElementById(clubs).style.color = gray;
    // document.getElementById(hearts).style.color = gray;
    // document.getElementById(spades).style.color = gray;
    // document.getElementById(colorInput).value = '';
    document.querySelector('#idInput').value = '';
    document.querySelector('#colorInput').value = '';
    document.querySelector('#diamonds').style.color = '';
    document.querySelector('#hearts').style.color = '';
    document.querySelector('#spades').style.color = '';
    document.querySelector('#clubs').style.color = '';
}
