let idflav = document.getElementById('flav');

idflav.addEventListener('click', changeImg);
idflav.addEventListener('mouseover', zoomImg);
idflav.addEventListener('mouseout', zoomOutImg);

function changeImg() {
    console.log(idflav.src) ;
    if (idflav.src) {
        idflav.src = 'img/flav_art_hallowenn.jpg';
    } else {
        idflav.src = 'img/header.jpg';
    }
}
function changeImg(){

    idflav.setAttribute('src', 'assets/img/header.jpg');
 }

function zoomImg() {
    idflav.style.width = '100%';
    
}

function zoomOutImg() {
    idflav.style.width = '40%';
    
}