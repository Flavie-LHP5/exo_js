function confirmPassword() {
    let idPassword = document.getElementById('password')
    let idPasswordCheck = document.getElementById('passwordcheck')

    if (idPassword.value == idPasswordCheck.value) {
        console.log('Mot de passe validé');
        idPassword.style.border = '2px green solid';
        idPasswordCheck.style.border = '2px green solid';
    } else {
        console.log('échec de la confirmation du mot de passe');
        idPassword.style.border = '2px red solid';
        idPasswordCheck.style.border = '2px red solid';
    }
}