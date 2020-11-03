
let userAge = window.prompt("Votre age");

if (userAge >= 18) {
    window.alert("Vous êtes majeur.");
} else {
    window.alert("Vous êtes mineur.");
}

/* Demander à l'aide d'une boîte de dialogue l'âge d'un utilisateur.
S'il a plus de 18 ans, lui afficher Vous êtes majeur, sinon lui afficher Vous êtes mineur.
On utilise prompt pour demander l'âge de l'utilisateur,
Si l'age de l'utilisateur est plus grand que 18 on affiche vous êtes majeur, sinon on affiche voous êtes mineur.
Prompt retourne une chaine de caractère, le parseInt transforme le string en int ça permet de comparer l'age de l'utilisateur.
*/