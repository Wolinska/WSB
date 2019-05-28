<?php
session_start();

    if(isset($_POST['przycisk'])){
        if (!empty($_POST['login']) && !empty($_POST['haslo'])){
            if ($polaczenie = new mysqli('localhost', 'root', '', 'logowanie')){
                $login = $polaczenie->real_escape_string(htmlentities($_POST['login']));
                $haslo = $polaczenie->real_escape_string(htmlentities($_POST['haslo']));
                $sql = "SELECT * FROM 'user' WHERE login='$login' AND haslo='$haslo'";

                if ($result = $polaczenie->query($sql)){
                    if ($result->num_rows == 1) {
                        $spolszczenie ->close();
                        if ($_SESSION[blad]) {
                            unset($_SESSION['blad']);
                        }
                        $_SESSION ['zalogowany']['login'] = $login;
                        header('location: zalogowany.php');

                    }else {
                        $_SESSION['blad'] = 'Bledny login lub haslo!';
                        header('location: index.php');
                    }
                }else{
                    echo 'Bledne zapytanie!';
                }
            }
            else {
                $_SESSION['blad'] = 'Bledne polaczenie z baza!';
                header('location: index.php');
            }
    } else {
        $_SESSION['blad'] = 'Wypelnij wszystkie pola!';
        header('location: index.php');
    }
    } else {
        header('location: index.php');
    }
?>
