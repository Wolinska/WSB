<?php
    session_start();
    $_SESSION['imie'] = 'Janusz';
?>

<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Sesja</title>
    </head>
    <body>
        Witamy
        <?php
            echo $_SESSION['imie'];
        ?>
        na stronie! <br>

        Identyfikator sesji: <?php echo session_id(); ?> <br>
        <a href="sesja1.php">Nastepna strona</a> <hr>
        <a href="index.php?usunSesje=">Usun sesje</a>

        <?php
        if (isset($_GET['usunSesje'])){
            session_destroy();
        }
        ?>
    </body>
</html>
