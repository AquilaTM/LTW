<?php
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: /");
}
else {
    $dbconn =pg_connect("host=localhost port=5432 dbname=db_server user=postgres password=valerio101") or die("errore entrato" . pg_lost_error());
}
?>

<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <?php
             if ($dbconn){
                $email = $_POST['email1'];
                $q1="SELECT* from utenti where email= $1";
                $result=pg_query_params($dbconn, $q1, array($email));
                if ($tuple=pg_fetch_array($result, null, PGSQL_ASSOC)){
                    echo "email gia usata";
                }
                else {
                    $nome = $_POST['nome'];
                    $cognome = $_POST['cognome'];
                    $telefono=$_POST["numero_telefono"];
                    $data_dinascita=$_POST['data_dinascita'];
                    $password = $_POST['password'];
                    $q2 = "INSERT INTO utenti VALUES ($1,$2,$3,$4,$5,$6)";
                    $data = pg_query_params($dbconn, $q2,array($nome, $cognome,$email, $telefono, $data_dinascita,$password));
                    if ($data) {
                        header("Location: ./pagina-login.html");
                    }
                }
             }

        ?> 
</body>
</html>