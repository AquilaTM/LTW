CREATE TABLE utenti(
    nome VARCHAR (30) NOT NULL,
    cognome VARCHAR (30) NOT NULL,
    email VARCHAR(70) NOT NULL UNIQUE,
    numero_telefono BIGINT NOT NULL,
    data_dinascita DATE NOT NULL,
    password VARCHAR (20) NOT NULL UNIQUE
);

CREATE TABLE acquista(
    email VARCHAR(70) NOT NULL UNIQUE,
    museo1 INT NOT NULL,
    museo2 INT NOT NULL,
    museo3 INT NOT NULL,
    evento1 INT NOT NULL,
    evento2 INT NOT NULL,
    evento3 INT NOT NULL
);