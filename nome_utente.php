<?php
    $dbconn = pg_connect("host=localhost port=5432 dbname=db_server user=postgres password=valerio101") or die("errore entrato" . pg_last_error());
    session_start();
    $email=$_SESSION["email"];
    $query = "SELECT * FROM utenti WHERE email = '$email'";
    $result = pg_query($dbconn, $query);
    $row = pg_fetch_assoc($result);
    $arr1=array(
        "nome"=>$row['nome'],
        "cognome"=>$row["cognome"]
    );
    echo json_encode($arr1);
?>