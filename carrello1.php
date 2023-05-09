<?php
$dbconn = pg_connect("host=localhost port=5432 dbname=db_server user=postgres password=valerio101") or die("errore entrato" . pg_lost_error());
session_start();
$email=$_SESSION["email"];
$query = "SELECT * FROM acquista WHERE email = '$email'";
$result = pg_query($dbconn, $query);
$row = pg_fetch_assoc($result);

if ($row) {
    $arr=array(
        "evento1"=>$row['evento1'],
        "evento2"=>$row['evento2'],
        "evento3"=>$row['evento3'],
        "evento4"=>$row['evento4'],
        "evento5"=>$row['evento5'],
        "museo1"=>$row['museo1'],
        "museo2"=>$row['museo2'],
        "museo3"=>$row['museo3'],
        "museo4"=>$row['museo4'],
        "museo5"=>$row['museo5'],
        "museo6"=>$row['museo6'],
        "monumento1"=>$row["monumento1"],
        "monumento2"=>$row["monumento2"],
        "monumento3"=>$row["monumento3"],
        "monumento4"=>$row["monumento4"]
        
    );
    echo json_encode($arr);
}

?>