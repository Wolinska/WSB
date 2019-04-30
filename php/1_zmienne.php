<?php
#dozwolone nazwy zmiennych (nie moze zaczac sie od liczby)
    $liczba = 10;
    $_liczba = 10;
    $liczba2 = 10;
    $imie_ = 10;
    $Imie_ = 10;
    $wartość = 10; //polskie znaki

#wyswietlanie
    echo $liczba;
    echo "$liczba";
    echo '$liczba'; //wyswietli jako tekst

#typy zmiennych
    //typ skalarny (prosty)

    //boolean
    $prawda = true;
    $fałsz = false;

    //typ integer
    $całkowita = 200;
    $szesnastkowa = 0xA;
    $ósemkowa = 020;
    $binarna = 0b1010;

    //typ float
    $zmiennoprzecinkowa = 5.25;

    //typ string
    $tekst = 'tekst';
    $tekst = "tekst";

    //skladnia heredoc
    $imie = 'Janusz';

    $napis = <<<TEKST
       <br> Mam na imie $imie
       TEKST;
    echo $napis;

    //skladnia nowdoc
    $nazwisko = 'Nowak';
    $tekst = <<<'ETYKIETA'
    Moje nazwisko: $nazwisko<br>
    ETYKIETA;
    echo $tekst;

    //typ złożony
        //typ arrat (tablicowy)
        //typ object (obiektowy)
    //typ specjalny
        //typ resource
        //typ null

        $inna = null;
        $inna1 = NULL;
        echo "Zmienna o nazwie \$inna ma wartość: ", $inna;
?>
