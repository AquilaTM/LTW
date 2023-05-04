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
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php
 
 //$email=$_SESSION["email"];
 $conta_evento1=pg_escape_string($_POST['evento11']);
 $conta_evento2=pg_escape_string($_POST['evento12']);
 //$conta_evento2=$_POST["conta_evento2"];
 $query = "INSERT INTO acquista (evento1, evento2) VALUES ('$conta_evento1', '$conta_evento2')";
 $result = pg_query($dbconn, $query);
 //$q1="UPDATE acquista SET evento1=$conta_evento1,evento2=$conta_evento2, museo1=5 WHERE email='$email'";
 //$result=pg_query($q1) or die("Query failed:".pg_last_error());
 //$conn = pg_connect("host=nomedelhost dbname=nomedeldatabase user=nomeutente password=password");

?>
    
</body>
</html>
