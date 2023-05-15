<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: /");
}else{
    $dbconn = pg_connect("host=localhost port=5432 dbname=db_server user=postgres password=valerio101") or die("errore entrato" . pg_lost_error());
    session_start();
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
 $conta_evento1=pg_escape_string($_POST['concerto-primo-maggio']); //cambiare nomi evento11->concerto-primo-maggio
 echo "$conta_evento1";
 $conta_evento2=pg_escape_string($_POST['boccea-street']);
 echo "$conta_evento2";
 $conta_evento3=pg_escape_string($_POST['festival-delle-scienze']);
 echo " $conta_evento3";
 $conta_evento4=pg_escape_string($_POST['vinalia-priora']);
 echo"$conta_evento4";
 $conta_evento5=pg_escape_string($_POST['rugantino-al-sistina']);
 echo "$conta_evento5";
 $conta_museo1=pg_escape_string($_POST['musei-vaticani']);
 echo " $conta_museo1";
 $conta_museo2=pg_escape_string($_POST['musei-capitolini']);
 echo " $conta_museo2";
 $conta_museo3=pg_escape_string($_POST['galleria-borghese']);
 echo "$conta_museo3";
 $conta_museo4=pg_escape_string($_POST['galleria-doria-pamphilj']);
 echo"$conta_museo4";
 $conta_museo5=pg_escape_string($_POST['museo-nazionale-di-arte-moderna']);
 echo "$conta_museo5";
 $conta_museo6=pg_escape_string($_POST['maxxi']);
 echo "$conta_museo6";
 $conta_monumento1=pg_escape_string($_POST['colosseo']);
 echo "$conta_monumento1";
 $conta_monumento2=pg_escape_string($_POST['ara-pacis']);
 echo "$conta_monumento2";
 $conta_monumento3=pg_escape_string($_POST['altare-della-patria']);
 echo"$conta_monumento3";
 $conta_monumento4=pg_escape_string($_POST['castel-sant-angelo']);
 echo"$conta_monumento4";
 //$conta_evento2=$_POST["conta_evento2"];
$sql = "SELECT COUNT(*) FROM acquista WHERE email = $1";
$result = pg_query_params($dbconn, $sql, [$email]);
$count = pg_fetch_result($result, 0, 0);
if ($count > 0) {
    $query = "UPDATE acquista 
          SET 
            evento1 = evento1+$conta_evento1,
            evento2 = evento2+$conta_evento2,
            evento3 = evento3+ $conta_evento3,
            evento4 =  evento4+$conta_evento4,
            evento5 = evento5+$conta_evento5,
            museo1 =  museo1+ $conta_museo1,
            museo2 = museo2+$conta_museo2,
            museo3 = museo3 +$conta_museo3,
            museo4 = museo4+$conta_museo4,
            museo5 =  museo5+$conta_museo5,
            museo6 = museo6+$conta_museo6,
            monumento1 =monumento1+ $conta_monumento1,
            monumento2 =monumento2+$conta_monumento2,
            monumento3 =monumento3+ $conta_monumento3,
            monumento4 =monumento4+ $conta_monumento4
          WHERE email = $1";

    $result = pg_query_params($dbconn, $query, [$email]);
    $query = "UPDATE biglietti SET 
                evento1=evento1-$conta_evento1,
                evento2=evento2-$conta_evento2,
                evento3=evento3-$conta_evento3,
                evento4=evento4-$conta_evento4,
                evento5=evento5-$conta_evento5,
                museo1=museo1-$conta_museo1,
                museo2=museo2-$conta_museo2,
                museo3=museo3-$conta_museo3,
                museo4=museo4-$conta_museo4,
                museo5=museo5-$conta_museo5,
                museo6=museo6-$conta_museo6,
                monumento1 = monumento1-$conta_monumento1,
                monumento2 = monumento2-$conta_monumento2,
                monumento3 = monumento3-$conta_monumento3,
                monumento4 = monumento4-$conta_monumento4
                WHERE numero_riga = 1";
    $result = pg_query($dbconn, $query);
} else {
    $query = "INSERT INTO acquista (email,evento1, evento2,evento3,evento4,evento5,museo1,museo2,museo3,museo4,museo5,museo6,monumento1,monumento2,monumento3,monumento4) VALUES ('$email','$conta_evento1', '$conta_evento2','$conta_evento3','$conta_evento4','$conta_evento5','$conta_museo1','$conta_museo2','$conta_museo3','$conta_museo4','$conta_museo5','$conta_museo6','$conta_monumento1','$conta_monumento2','$conta_monumento3','$conta_monumento4')";
    $result = pg_query($dbconn, $query);
    $query = "UPDATE biglietti SET 
                evento1=evento1-$conta_evento1,
                evento2=evento2-$conta_evento2,
                evento3=evento3-$conta_evento3,
                evento4=evento4-$conta_evento4,
                evento5=evento5-$conta_evento5,
                museo1=museo1-$conta_museo1,
                museo2=museo2-$conta_museo2,
                museo3=museo3-$conta_museo3,
                museo4=museo4-$conta_museo4,
                museo5=museo5-$conta_museo5,
                museo6=museo6-$conta_museo6,
                monumento1 = monumento1-$conta_monumento1,
                monumento2 = monumento2-$conta_monumento2,
                monumento3 = monumento3-$conta_monumento3,
                monumento4 = monumento4-$conta_monumento4
                WHERE numero_riga = 1";
    $result = pg_query($dbconn, $query);
}

header("Location: ./index.php");


?>
    
</body>
</html>
