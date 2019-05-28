<?php
    session_start();
unset($_SESSION['imie']);
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
        <a href="index.php">Pierwsza strona</a> <br>
    </body>
</html>
