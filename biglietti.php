<?php
    $dbconn = pg_connect("host=localhost port=5432 dbname=db_server user=postgres password=valerio101") or die("errore entrato" . pg_lost_error());
    if($dbconn){
        $sql = "SELECT * FROM biglietti";
        $result=pg_query($sql);
        while($row=pg_fetch_array($result,null,PGSQL_ASSOC)){
                $arr=array(
                    "evento1"=>$row["primoevento"],
                    "evento2"=>$row["evento2"]
                );
            }
        echo json_encode($arr);
    }
?> 
