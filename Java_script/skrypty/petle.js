document.write('<hr>');

let i;
for (i=1; i <=10; i++){
    document.write(i + ' ');
}

document.write('<hr>');
//Napisz program, ktory wyswietli liczby od 13 do 20 włącznie, wykorzystaj petle for, kazda liczba ma byc zapisana w nowej linii

for (i=13; i<=20; i++){
    document.write(i, '<br>');
}
document.write('<hr>');

//Wypisz liczby parzyste z przedzialu <10;50> malejaco, po kazdej liczbie wyswietl przecinek i spacje, po ost liczbie wyswietli kropke

for(i=50; i >=10; i--){
    if ( i % 2 == 0){
        if (i == 10){
            document.write(i, '.');
        }
        else{
            document.write(i, ',');
        }
    }
}
document.write('<br>');

//Uzytkownik podaje z klawiatury w polach input dwie liczby, jesli pierwsza liczba bedzie mniejsza od drugiej to liczby wyswietli rosnaco w bloku na stronie, w przeciwnym razie liczby wyswietli malejaco, np. x=1, y=3 ==> 1 2 3

let elPrzycisk = document.getElementById('przycisk');
let elLiczba1 = document.getElementById('liczba1');
let elLiczba2 = document.getElementById('liczba2');
let elKomunikat = document.getElementById('komunikat');
let liczba1, liczba2, wynik = '';

function wyswietl(){
    liczba1 = elLiczba1.value;
    liczba2 = elLiczba2.value;

    liczba1 = parseInt(liczba1);
    liczba2 = parseInt(liczba2);

    if (liczba1 <= liczba2){
        for(i = liczba1; i<=liczba2; i++){
             wynik += i + ' ';
        }
    }
    elKomunikat.innerHTML = wynik;
}

elPrzycisk.addEventListener('click', wyswietl);
