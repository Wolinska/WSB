let text = 'WSB - Wyzsza szkola bankowa';

console.log(text);
console.log(text.length); //27

let pierwszyZnak = text.charAt(0);
console.log(pierwszyZnak); //W

let ostatniZnak = text.charAt(text.length - l); //a
console.log(ostatniZnak);

console.log(text.charCodeAt(0)); //87 - ASCII (literka W)

//Sprawdz czy uzytkownik podal min jedna duza litere w polu input
let elTekst = document.getElementById('tekst');
let elPrzycisk = document.getElementById('przycisk');
let elKomunikat = document.getElementById('k');
let tekst;
let x = 'AZ', i, znak;

function spr(){
    //65 - A
    //90 - Z
    tekst = elTekst.value;
    for (i = 0; i <= tekst.length; i++){
        znak = tekst.charCodeAt(i);
        if (znak >= 65 && znak<=90){
            k.innerHTML = 'Duza litera: ' + tekst.charAt(i);
            break;
        }
    }
}
elPrzycisk.addEventListener('click', spr);


tekst = 'poZnAn';
let duze = tekst.toUpperCase();
console.log(duze); //POZNAN

let male = tekst.toLowerCase();
console.log(male); //poznan

//wytnij tekst od drugiej litery
let wytnij = tekst.slice(1);
console.log(wytnij); //oZnAn

let wytnij1 = tekst.slice(2,3);
console.let(wytnij1); //zna


/*Uzytkownik podaje z klawiatury w polach tekstowych  (input) swoje imie i nazwisko, wyswietl dane w formacie
Imie: Jan
Nazwisko: Kowalski
(pierwsza litera duza, pozostale male)
*/
