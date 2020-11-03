
let userNote = window.prompt("Mettez une note entre 0 et 10 compris");

if (userNote >= 0 && userNote < 3) {
    window.alert("C'est Nul.");
}
else if (userNote >= 3 && userNote < 6) {
    window.alert("C'est Moyen.");
}
else if (userNote >= 6 && userNote < 8) {
    window.alert("C'est Assez Bien.");
}
else if (userNote >= 8 && userNote <= 9) {
    window.alert("C'est Bien.");
}
else if (userNote == 10) {
    window.alert("C'est Excellent.");
} 
else {
    window.alert("Veuillez saisir une note entre 0 et 10 compris.");
 }

/* Demander une note à l'utilisateur :

Si elle est entre 0 et 3 afficher Nul
Si elle est entre 4 et 6 afficher Moyen
Si elle est entre 6 et 8 afficher Assez Bien
Si elle est entre 8 et 9 afficher Bien
Si elle est égale à 10 afficher Excellent

On demande a l'utilisateur de mettre une note;
Et on la parseInt directement pour réccuperer un nombre entier
On compare les else if si la note et plus grande ou égale a zéro et si elle l'est plus petit que 3
si c'est nul et ainsi de suite */