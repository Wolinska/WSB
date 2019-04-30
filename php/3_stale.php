<?php
define('PI', 3.14159);
echo PI, '<br>';

const NARODOWOSC = 'polska';
echo NARODOWOSC, '<br>';

define ('WIEK', 22, true); //jesli jest true to mozna wypisywac rozna wielkoscia liter nazwy wyswietlanych zmiennych
echo Wiek, '<hr>';

/*
Utworz zmienne: imie, nazwisko
oraz stale: miasto, kraj (przypisz swoje dane).
Wykorzystaj do wyswietlenia heredoc. Wyswietl na ekranie w formacie:
Imie: <imie>
Nazwisko: <nazwisko>
Miasto: <miasto>, kraj: <kraj>
*/

$imie = 'Angelika';
$nazwisko = 'Wolinska';
$miasto = 'Poznan'; //define
$kraj = 'Polska'; //define

$napis = <<<TEKST
       <br> Imie: $imie
       <br> Nazwisko: $nazwisko
       <br> Miasto: $miasto , kraj: $kraj
       TEKST;
    echo $napis, '<hr>'; //echo miasto, kraj

//stale predefiniowane
echo PHP_VERSION; //7.3.4
echo gettype(PHP_VERSION) //STRING

    $ver = PHP_VERSION

?>
