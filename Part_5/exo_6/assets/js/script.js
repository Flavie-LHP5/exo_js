let idName = document.getElementById('name');
let idMail = document.getElementById('mail');
let idAge = document.getElementById('age');

idName.addEventListener('focus', applyBorderName);
idMail.addEventListener('focus', applyBorderMail);
idAge.addEventListener('focus', applyBorderAge);

function applyBorderName() {
    idName.style.border = '3px solid black';
    idMail.style.border = '';
    idAge.style.border = '';
}

function applyBorderMail() {
    idMail.style.border = '3px solid black';
    idName.style.border = '';
    idAge.style.border = '';
}

function applyBorderAge() {
    idAge.style.border = '3px solid black';
    idName.style.border = '';
    idMail.style.border = '';
}
