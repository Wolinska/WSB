<?php
    $potega = 2**10;
    $modulo = 11%2;

#operatory bitowe
//and $, or |, not ~, xor ^

    $dziesiec = 0b1010;
    echo $dziesiec, "<br>";

    $x = $dziesiec >> 1;
    //101
    echo "$x<br>";

    $y = $dziesiec << 2;
    //101000 = 8 + 32 = 40
    echo "$y<br>";

#operatory logiczne
    //and, or, xor, !, &&, ||

#operatory relacyjne
    //==, ===, <>, !=, !==, >, <, >=, <=, <=>

    $a =2;
    $b =2;
    $c = '1';
    $d = 1;

    $wynik = $a == $c; //1
    $wynik = $a === $c; //false
    $wynik = $a === $d; //1 (true)
    $wynik = $a <> $d; //false
    $wynik = $a <> $b; //1
    $wynik = $a !== $b; //false
    $wynik = $a !== $c; //1

    echo $wynik;

    $a = 21;
    $b = 31;

    $wynik = $a <=> $b;
    echo "<hr>$wynik <hr>";

###############################################

    $a = 1.0;
    $b = 1;

 if ($a === $b){
     echo 'Równe';
 } else {
     echo 'Różne';
 }

echo gettype ($a); //double
echo gettype ($b); //int


###############################################
$x = 2;
echo $x++;// 2
echo ++$x;// 4
echo $x;// 4

$y = $x++;
echo $y;// 4
$y = ++$x;
echo $y;// 6
echo ++$y, '<hr>';//7

##############################################

#operatory rzutowania
// bool, int, float, string, array, object, unset

    $tekst1 = '4fasd';
    $tekst2 = 'Drugi tekst';
    $tekst3 = '7';
    $liczba = 15;
    $j = -1;
    $i = 0;
    $c = 100;

    $dwa = (int)$tekst1;
    echo $dwa;//9

    echo gettype ($tekst1);//string
    echo gettype ($dwa);//int

    $j = (bool)$j;
    echo $j;//1 (true)

    $i = (bool)$i;
    echo $i;//false

    $c =(unset)$c;
    echo $c;
    echo gettype($c); //NULL

    $tekst1 = (int)$tekst1;
    echo $tekst1; //9
    echo gettype($tekst1); //int

    $tekst1 = (int)$tekst2;
    echo $tekst1; //0
    echo gettype($tekst1); //int

    $liczba = (float)$liczba;
    echo $liczba;
    echo gettype($liczba); //double

################################################

        echo PHP_INT_SIZE, '<hr>';

################################################

#kontrola typu zmiennych

$tekst = 'szkola';
$x = 10;
$a = 20.5;
$y = true;
$z = null;
$w;

echo gettype ($tekst); //string
echo gettype ($x); //int
echo gettype ($a); //double
echo gettype ($y); //boolean
echo gettype ($z); //null
echo gettype ($w); //Notice: Undefined variable (null)
echo @gettype ($w), '<hr>'; //operator ignorowania błędów

###################################################

#zmienne superglobalne
//$_GET, $_POST, $_COOKIE, $_FILES, $_SESSION, $_SERVER

echo $_SERVER ['SERVER_PORT'], '<br>'; //8060
echo $_SERVER ['SERVER_PROTOCOL'], '<br>'; //HTTP/1.1
echo $_SERVER ['SCRIPT_NAME'], '<br>'; //php/2_operacjeNaZmiennych.php
echo $_SERVER ['DOCUMENT_ROOT'], '<br>'; //C:/xampp/htdocs

$lokalPliku = $_SERVER ['DOCUMENT_ROOT'];
$lokalPliku = $_SERVER ['SCRIPT_NAME'];
echo $lokalPliku;

?>
