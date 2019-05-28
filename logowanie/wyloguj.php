<?php
session_start();
if(isset($_SESSION['zalogowany']['login]']) && $_GET['wyloguj']){
    session_destroy();
    header('location: ./index.php?wylogowany=');
}else {
    header ('location: ./index.php');
}

?>
