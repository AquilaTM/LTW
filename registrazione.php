<?php
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: /");
}
else {
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
             if ($dbconn){
                $email = $_POST['email_signup'];
                $q1="SELECT* from utenti where email= $1";
                $result=pg_query_params($dbconn, $q1, array($email));
                if ($tuple=pg_fetch_array($result, null, PGSQL_ASSOC)){
                    echo "<script>Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Email gia in uso!'
                      }).then(function() {
                        window.location.href = 'pagina-login.html';
                      });</script>";
                }
                else {
                    $nome = $_POST['nome'];
                    $cognome = $_POST['cognome'];
                    $telefono=$_POST["numero_telefono"];
                    $data_dinascita=$_POST['data_nascita'];
                    $password = $_POST['password_signup'];
                    $q2 = "INSERT INTO utenti VALUES ($1,$2,$3,$4,$5,$6)";
                    $data = pg_query_params($dbconn, $q2,array($nome, $cognome,$email, $telefono, $data_dinascita,$password));
                    if ($data) {
                        $q3="INSERT INTO acquista VALUES($1,$2,$3,$4,$5,$6,$7)";
                        $data1=pg_query_params($dbconn, $q3,array($email,0,0,0,0,0,0));
                        header("Location: ./pagina-login.html");
                    }
                }
             }

        ?> 
</body>
</html>