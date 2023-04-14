<?php

$host = "127.0.0.1";
$user = "root";
$password = "";
$database = "prova_sito";

$connessione = new mysqli($host, $user, $password, $database); //come mysqli_connect

if($connessione == false){
    die("errore di connessione :" . $connessione->connect_error);
}
 echo "connessione avvenuta con successo :" . $connessione->host_info ;

$sql = "CREATE TABLE utenti(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (30) NOT NULL,
    cognome VARCHAR (30) NOT NULL,
    email VARCHAR(70) NOT NULL UNIQUE,
    numero_telefono BIGINT(20) NOT NULL,
    data_di_nascita DATE NOT NULL,
    password_ VARCHAR (20) NOT NULL UNIQUE
    )";

if($connessione->query($sql) == true){
    echo "tabella creato con successo";
} 
else{
    "errore creazione tabella :" . $connessione->error;
}

//inserimento

$sql1 = "INSERT INTO `utenti` (`nome`, `cognome`, `email`, `numero_telefono`, `data_di_nascita`, `password_`) VALUES
('matteo', 'ancona', 'anconamatteo2000@mail.com', '3913513096', '2000-09-15', 'Matteo1234'),
('paolo', 'rossi', 'paolorossi@gmail.com', '123456788', '2000-09-15', 'paolorossi1')
";

if($connessione->query($sql1) == true){
    $ultimo_elemento = $connessione->insert_id;
    echo "utente inserito con successo, il suo id è: " . $ultimo_elemento ;
 } 
 else{
    "errore durante inserimento :" . $connessione->error;
 }


 $connessione->close();

?>