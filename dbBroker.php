<?php

    $host = "localhost";
    $db = "kolokvijumi";
    $username = "root";
    $password = "";

    $conn = new mysqli($host, $username, $password, $db);

    if($conn->connect_errno){
        exit("Neuspesna konekcija: greska: ". $conn->connect_error . ", err kod: ". $conn->connect_errno);
    }

?>