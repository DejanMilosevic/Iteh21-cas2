<?php
    require "../dbBroker.php";
    require "../model/prijava.php";

    if(isset($_POST['predmet']) && isset($_POST['katedra']) &&
        isset($_POST['sala']) && isset($_POST['datum'])){
            $prijava = new Prijava($_POST['id'], $_POST['predmet'], $_POST['katedra'], $_POST['sala'], $_POST['datum']);

            $status = $prijava->update($conn);

            if($status){
                echo "Success";
            }
            else{
                echo $status;
                echo "Failed";
            }
    }
?>