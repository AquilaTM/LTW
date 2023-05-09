<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: /");
}else{
    $dbconn=pg_connect("host=localhost port=5432 dbname=prova user=postgres password=riaq4500") or die("errore entrato" . pg_lost_error());
    //$dbconn = pg_connect("host=localhost port=5432 dbname=db_server user=postgres password=valerio101") or die("errore entrato" . pg_lost_error());
}
?>

<!DOCTYPE html>
<html>
    <head>
    <!--Libreria sweetalert per Pop up-->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    </head>
    <body>
        <?php
            if($dbconn){
                $email = $_POST["email_login"];
                $password = $_POST["password_login"];
                $q1 ="SELECT * FROM utenti where email=$1";
                $result=pg_query_params($dbconn,$q1,array($email));
                if(!($tuple=pg_fetch_array($result, null, PGSQL_ASSOC))){
                    echo "<script>Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Email sbagliata!'
                      }).then(function() {
                        window.location.href = 'pagina-login.html';
                      });</script>";
                }else{
                    $q2 = "select * from utenti where email = $1 and password = $2";
                    $result = pg_query_params($dbconn, $q2, array($email,$password));
                    if (!($tuple=pg_fetch_array($result, null, PGSQL_ASSOC))){
                        echo "<script>Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Password sbagliata!'
                          }).then(function() {
                            window.location.href = 'pagina-login.html';
                          });</script>";
                    }else{
                        if(!isset($_SESSION["email"])){
                            $_SESSION["email"]=$_POST["email_login"];
                            $_SESSION["condizione"]=true;
                            header("Location: ./index.php");
                        }else{ //se esiste 
                            $_SESSION["condizione"]=true;
                            $_SESSION["email"]=$_POST["email_login"];
                            header("Location: ./index.php");
                            //header utile per dire a che pagina andare

                        }
                    }
                }
            }
        ?> 
    </body>
</html>