
let userNum = window.prompt("Choisissez un nombre");

if ((userNum % 2) == 0) {
    window.alert("C'est un nombre pair.");
} else {
    window.alert("C'est un nombre impair.");
}


/* Demander un nombre à l'utilisateur. S'il est pair afficher Le nombre est pair, sinon afficher Le nombre est impair.
Prompt pour demander le nombre, on fait un parseInt pour recuperer le nombre entier.
On utilise modulo 2 = une opération 
si le résulta c'est zéro il est paire, sinon il est impaire
*/