<?php
session_start();
?>

<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Logowanie do systemu</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <?php
         if (isset($_SESSION['blad'])){
             echo '<span class="red">',$_SESSION['blad'], '</span>';
         }
        ?>
        <form action="sprawdz.php" method="post">
            <input type="text" name="login" placeholder="login" autofocus><br>
            <input type="password" name="haslo" placeholder="haslo"><br>
            <input type="submit" name="przycisk" value="zaloguj sie">
        </form>
    </body>
</html>

<!--
argon 2ID
-->
<!-- login: var, bez autoikrementacji, haslo: text-->
