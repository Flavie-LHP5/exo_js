function validName() {
    let idName = document.getElementById('name');
    let regexName = /^[a-zA-Zéèàùçêëï\-]+$/;
    let errorName = document.getElementById('errorName');

    if (regexName.test(idName.value)) {
        console.log('nom valide');
        idName.style.border = '2px solid green';
        errorName.textContent = '';

    } else {
        console.log('nom invalide');
        idName.style.border = '2px solid red';
        errorName.textContent = 'erreur';

    }
}

function validMail() {
    let idMail = document.getElementById('mail');
    let regexMail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (regexMail.test(idMail.value)) {
        console.log('mail valide');
        idMail.style.border = '2px solid green';
        document.getElementById('errorMail').innerHTML = '';

    } else {
        console.log('mail invalide');
        idMail.style.border = '2px solid red';
        document.getElementById('errorMail').innerHTML = 'erreur';

    }
}

function validAge() {
    let idAge = document.getElementById('age');
    let regexAge = /^[1-9][0-9]?$/;


    if (regexAge.test(idAge.value)) {
        console.log('age valide');
        idAge.style.border = '2px solid green';
        document.getElementById('errorAge').innerHTML = '';

    } else {
        console.log('age invalide');
        idAge.style.border = '2px solid red';
        document.getElementById('errorAge').innerHTML = 'erreur';
    }
}