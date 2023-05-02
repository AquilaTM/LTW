<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: /");
}else{
    $dbconn = pg_connect("host=localhost port=5432 dbname=db_server user=postgres password=valerio101") or die("errore entrato" . pg_lost_error());
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
 
 $email=$_SESSION["email"];
 $conta_evento1=pg_escape_string($_POST['evento11']); //cambiare nomi evento11->concerto-primo-maggio
 $conta_evento2=pg_escape_string($_POST['evento12']);
 $conta_evento3=pg_escape_string($_POST['evento13']);
 $conta_evento4=pg_escape_string($_POST['evento14']);
 $conta_evento5=pg_escape_string($_POST['evento15']);
 $conta_museo1=pg_escape_string($_POST['evento21']);
 $conta_museo2=pg_escape_string($_POST['evento22']);
 $conta_museo3=pg_escape_string($_POST['evento23']);
 $conta_museo4=pg_escape_string($_POST['evento24']);
 $conta_museo5=pg_escape_string($_POST['evento25']);
 $conta_museo6=pg_escape_string($_POST['evento26']);
 $conta_monumento1=pg_escape_string($_POST['evento31']);
 $conta_monumento2=pg_escape_string($_POST['evento32']);
 $conta_monumento3=pg_escape_string($_POST['evento33']);
 $conta_monumento4=pg_escape_string($_POST['evento34']);
 //$conta_evento2=$_POST["conta_evento2"];
$sql = "SELECT COUNT(*) FROM acquista WHERE email = $1";
$result = pg_query_params($dbconn, $sql, [$email]);
$count = pg_fetch_result($result, 0, 0);
if ($count > 0) {
    $sql = "UPDATE acquista SET conta_evento1 = $1, conta_evento2 = $2 WHERE email = $3";
    $result = pg_query_params($dbconn, $sql, [$conta_evento1, $conta_evento2, $email]);
} else {
    $query = "INSERT INTO acquista (email,evento1, evento2,evento3,evento4,evento5,museo1,museo2,museo3,museo5,museo5,museo6,monumento1,monumento2,monumento3,monumento4) VALUES ('$email','$conta_evento1', '$conta_evento2','$conta_evento3','$conta_evento4','$conta_evento5','$conta_museo1','$conta_museo2','$conta_museo3','$conta_museo4','$conta_museo5','$conta_museo6','$conta_monumento1','$conta_monumento2','$conta_monumento3','$conta_monumento4')";
    $result = pg_query($dbconn, $query);
}

 //$q1="UPDATE acquista SET evento1=$conta_evento1,evento2=$conta_evento2, museo1=5 WHERE email='$email'";
 //$result=pg_query($q1) or die("Query failed:".pg_last_error());
 //$conn = pg_connect("host=nomedelhost dbname=nomedeldatabase user=nomeutente password=password");

?>
    
</body>
</html>
