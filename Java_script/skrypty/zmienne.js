//alert("test");

zmienna = 7;

/*
    zmienna - nazwa zmiennej
    = operator przypisania
    7 wartosc zmiennej
    + konkatenacja (połączenie ciągu znaków)
*/

var imie = "Janusz";
let nazwisko;
nazwisko = 'Nowak';
document.write('Twoje imię: '+ imie + '<br>');

let wiek = 21;
document.write('Twój wiek: ' + wiek + '<br>');
document.write('Twój wiek: ', wiek, '<br>');

console.log(wiek);
console.log('wynik = ', 3*5)

//działania + - * /
let x,y;
x = 10;
y = 7;
let suma = x + y;
wynik = "Suma wynosi: ";
wynik += suma;
wynik += '<br>';

//potegowanie
let potega = Math.pow(2,10);
//alert('Potęga: ' + potega);

//modulo - reszta z dzielenia
let modulo = x % y;
document.write(modulo);

//typy danych
let a = 10, b='10a';
console.log(typeof(a)); //number
console.log(typeof(b)); //string

let prawda = true;
console.log(typeof(prawda)); //boolean

let nic = null;
console.log(typeof(nic)); //object

let pusta;
console.log(typeof(pusta)); //undefined

console.log(a + (a%3) - 10); //1

//systemy liczbowe
let dziesietny = 11; //liczba w systemie dziesietnym
let oktalny =010;

console.log(oktalny); //8

let szesnastkowy = 0x10; //16

let l1 = prompt('Podaj pierwsza liczbe');
console.log("podana pierwsza liczba z klawiatury: ", l1);

let l2 = prompt('Podaj druga liczbe');
console.log("podana druga liczba z klawiatury: ", l1);

let suma = l1 + l2;
console.log('Suma liczb: ' + l1 + 'i ' + l2 + ' wynosi ' + suma); //, wpisane 2 i 4, wyswietlilo 24

console.log(typeof(l1)); //string
console.log(typeof(l2)); //string

//konwersja typu danych

l1 = parseInt(l1);
l1 = parseInt(l2);

suma = l1 + l2;
console.log('Suma liczb: ' + l1 + 'i ' + l2 + ' wynosi ' + suma); // wpisane 2 i 4, wyswietlilo 6

/*
suma dwoch liczb zmiennoprzecinkowych
wyswietl sume dwoch liczb w formacie: a + b = wynik
*/

//camel case - sposob nazywania danych na wielbłąda (pierwszaZmienna, maszNaImie), pierwsza litera mala, nastepne duze

l1 = parseFloat(prompt('Podaj pierwsza liczbe: ', 'np. 2.5'))
l2 = parseFloat(prompt('Podaj druga liczbe: ', 'np. 2.5'))
suma = l1 + l2
document.write(l1 + ' + ' + l2 + ' = ' + suma)

/*
zadanie domowe

Zadanie 1
Napisz program, ktory obliczy pole prostokata (dane podaje uzytkownik z klawiatury, liczby zmiennoprzecinkowe)
Wyswietl wynik na ekranie w formacie: bok a: , bok b:, pole wyosi... cm^2 (2 w indeksie górnym)

Zadanie 2,3
W podobny sposob oblicz pole trojkata oraz kola
*/


//####################################################################
/*
Wyswietl imie i nazwisko uzytkownika (dane podane z klawiatury), w formacie: Imie: Janusz (Janusz ma byc w kolorze czerwonym), Nazwisko: Kowal (w kolorze niebieskim)
*/

let i = prompt('Podaj swoje imie: ', 'np. Janusz');
let n = prompt('Podaj swoje nazwisko: ', 'np. Kowal');

dane = '<hr> Imię: <span style="color:red">' + i;
dane += '</span>, Nazwisko: <span style="color:blue">' + n + '</span>';

document.write(dane);
