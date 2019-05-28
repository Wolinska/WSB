<?php
session_start();
?>

<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Zalogowany</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
            Zalogowany do systemu jako uzytkownik:
        <?php
            if (!isset($_SESSION['zalogowany']['login'])) {
                header('location: ./index.php');
            }
        echo '<span class="red>',$_SESSION ['zalogowany']['login'],'</span>';

        if ($polaczenie = new mysqli('127.0.0.1:88', 'root', '', 'logowanie')){
            $login = $_SESSION ['zalogowany']['login'];
            $sql = "SELECT * FROM 'user' WHERE login='$login' AND haslo='$haslo'";

            if ($result = $polaczenie->query($sql)) {
                $row = $result-?fetch_assoc();
                $miasto = $row['miasto'];
                $email = $row['email'];
                echo <<<DANE
                <br>Adres email: $email<hr>
                Miasto: $miasto

                DANE;
            } else{
                echo 'Bledne zapytanie';
            }
        }

        ?>
        <br><a href="zalogowany.php?pass=">Zmien haslo</a>

        <?php
        if (isset($_GET['pass'])) {
        ?>

        <h3>Zmiana hasla</h3>
        <form action="update_pass.php" method="post">
            <input type="password" name="old_pass" placeholder="Old pass"><br>
            <input type="password" name="pass" placeholder="pass"><br>
            <input type="password" name="re_pass" placeholder="Re pass"><br>
        </form>
        }

        <hr>
        <a href="wyloguj.php">Wyloguj sie</a>
    </body>
</html>
