CREATE TABLE utenti(
    nome VARCHAR (30) NOT NULL,
    cognome VARCHAR (30) NOT NULL,
    email VARCHAR(70) NOT NULL UNIQUE,
    numero_telefono BIGINT NOT NULL,
    data_dinascita DATE NOT NULL,
    password VARCHAR (20) NOT NULL UNIQUE
);