<?php
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: /");
}else{
    $dbconn =pg_connect("host=localhost port=5432 dbname=db_server user=postgres password=valerio101") or die("errore entrato" . pg_lost_error());
}
?>

<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <?php
            if($dbconn){
                $email = $_POST["email"];
                $password = $_POST["password"];
                $q1 ="SELECT * FROM utenti where email=$1";
                $result=pg_query_params($dbconn,$q1,array($email));
                if(!($tuple=pg_fetch_array($result, null, PGSQL_ASSOC))){
                    echo"errore email non registrata";
                }else{
                    $q2 = "select * from utente where email = $1 and paswd = $2";
                    $result = pg_query_params($dbconn, $q2, array($email,$password));
                    if (!($tuple=pg_fetch_array($result, null, PGSQL_ASSOC))){
                        echo"password sbagliata";
                    }else{
                        $nome=$tuple["nome"];
                        session_start();
                        if(!isset($_SESSION["nome"])){
                            $_SESSION["nome"]=$_GET["nome"];
                            $_SESSION["condizione"]=true;
                        }else{ //se esiste 
                            $_SESSION["condizione"]=true;

                        }
                    }
                }
            }
        ?> 
    </body>
</html>