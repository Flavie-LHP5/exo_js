//Exercice 1 : Donner la taille de la chaîne de caractères.
let stringLength = function (sentence) {
  reponse = sentence.length
  return reponse ;
}

//Exercice 2 : Remplacer le premier "e" de la chaîne par un espace.
let replaceFirstEBySpace = function (sentence) {
  let reponse = sentence.replace ('e', ' ') ;
  return reponse ;
}

//Exercice 3 : Concaténer les deux chaînes de caractères.
let concatenateSentences = function (firstSentence, secondSentence) {
  let reponse = firstSentence.concat(secondSentence);
  return reponse ;
}

//Exercice 4 : Afficher le cinquième caractère de la chaîne.
let displayFifthCharacter = function (sentence) {
  let reponse = sentence.charAt(4);
  return reponse ;
}

//Exercice 5 : Afficher les 9 premiers caractère.
let displayFirstNineCharacters = function (sentence) {
  let reponse = sentence.substr(0,9) ;
  return reponse ;
}

//Exercice 6 : Mettre en majuscule la chaîne.
let upperTheSentence = function (sentence) {
  reponse = sentence.toUpperCase() ;
  return reponse ;
}

//Exercice 7 : Mettre en minuscule la chaîne.
let lowerTheSentence = function (sentence) {
  reponse = sentence.toLowerCase() ;
  return reponse ;
}

//Exercice 8 : Supprimer les espaces avant et après la chaîne.
let removeSpaces = function (sentence) {
  reponse = sentence.trim() ;
  return reponse ;
}

//Exercice 9 : Afficher true si le paramètre d'entrée de la fonction est de type *string*.
let isString = function (sentence) {
  reponse = (typeof sentence === "string") ? true : false ;
  return reponse ;
}

//Exercice 10 : Afficher l'extension du fichier.
let displayExtension = function (fileName) {
  reponse = fileName.slice(fileName.lastIndexOf(".")+1)
  return reponse ;
}

//Exercice 11 : Compter le nombre d'espace dans la chaîne.
let countSpaces = function (sentence) {
  reponse = sentence.split(' ').length - 1;
  return reponse ;
}

//Exercice 12 : Inverser une chaîne de caractères.
let invertSentence = function (sentence) {
  reponse = sentence.split('').reverse().join('');
  return reponse ;
}

//Exercice 13 : Chercher si dans la chaîne de caractère se trouve "La Manu".
let searchInSentence = function (sentence) {
  reponse = sentence.includes('La Manu');
  return reponse ;
}

//Exercice 14 : Afficher la valeur absolue d'un nombre.
let displayAbsoluteValue = function (number) {
  reponse = Math.abs(number);
  return reponse ;
}

//Exercice 15 : Afficher les valeurs absolues de plusieurs nombres.
let displayAbsoluteValues = function (numbersArray) {
  reponse = numbersArray.map(Math.abs);
  return reponse ;
}

//Exercice 16 : Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche.
let calculateArea = function (radius) {
  reponse = Math.ceil(Math.PI * radius * radius); 
  return reponse ;
}

//Exercice 17 : Calculer l'hypothènuse d\'un triangle rectangle. Arrondir à l'entier inférieur.
let calculateHypotenuse = function (a, b) {
  reponse = Math.floor(Math.hypot(a, b)); 
  return reponse ;
}
