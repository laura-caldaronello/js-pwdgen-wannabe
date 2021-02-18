//esercizio

var firstName = prompt('Scrivi il tuo nome:');
var lastName = prompt('Scrivi il tuo cognome:');
var favColour = prompt('Scrivi il tuo colore preferito:');

document.getElementById('psw-1').innerHTML = firstName + lastName + favColour + 19;

//bonus: password più complessa (immagino che si possa scrivere la stessa cosa con molto meno codice)

var nCharFirstName = firstName.length;
var randFirstName1 = Math.floor(Math.random() * nCharFirstName);
var randFirstName2 = Math.floor(Math.random() * nCharFirstName);
var randFirstName3 = Math.floor(Math.random() * nCharFirstName);

var nCharLastName = lastName.length;
var randLastName1 = Math.floor(Math.random() * nCharLastName);
var randLastName2 = Math.floor(Math.random() * nCharLastName);
var randLastName3 = Math.floor(Math.random() * nCharLastName);

var nCharFavColour = favColour.length;
var randFavColour1 = Math.floor(Math.random() * nCharFavColour);
var randFavColour2 = Math.floor(Math.random() * nCharFavColour);
var randFavColour3 = Math.floor(Math.random() * nCharFavColour);

var casualChar1 = firstName.charAt(randFirstName1);
var casualChar2 = firstName.charAt(randFirstName2);
var casualChar3 = firstName.charAt(randFirstName3);
var casualChar4 = lastName.charAt(randLastName1);
var casualChar5 = lastName.charAt(randLastName2);
var casualChar6 = lastName.charAt(randLastName3);
var casualChar7 = favColour.charAt(randFavColour1);
var casualChar8 = favColour.charAt(randFavColour2);
var casualChar9 = favColour.charAt(randFavColour3);

document.getElementById('psw-2').innerHTML = casualChar1 + casualChar2 + casualChar3 + casualChar4 + casualChar5 + casualChar6 + casualChar7 + casualChar8 + casualChar9;
