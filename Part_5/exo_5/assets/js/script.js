let idText = document.getElementById('text');
let idPink = document.getElementById('pink');
let idBlue = document.getElementById('blue');
let idPurple = document.getElementById('purple');
let idBold = document.getElementById('bold');
let idItalic = document.getElementById('italic');

idPink.addEventListener('click', changeInPink);
idBlue.addEventListener('click', changeInBlue);
idPurple.addEventListener('click', changeInPurple);
idBold.addEventListener('click', changeInBold);
idItalic.addEventListener('click', changeInItalic);

function changeInPink() {
    idText.style.color = 'pink';
}

function changeInBlue() {
    idText.style.color = 'blue';
}

function changeInPurple() {
    idText.style.color = '#800080';
}

function changeInBold() {
    idText.style.fontWeight = 'bold';
}

function changeInItalic() {
    idText.style.fontStyle = 'italic';
}