function confirmPassword() {
    let idPassword = document.getElementById('password')
    let idPasswordCheck = document.getElementById('passwordcheck')

    if (idPassword.value == idPasswordCheck.value) {
        
        idPassword.style.border = '2px green solid';
        idPasswordCheck.style.border = '2px green solid';
    } else {
        
        idPassword.style.border = '2px red solid';
        idPasswordCheck.style.border = '2px red solid';
    }
}