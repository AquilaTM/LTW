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
    evento1 integer not null,
    evento2 integer not null,
    evento3 integer not null,
    evento4 integer not null,
    evento5 integer not null,
    museo1 integer not null,
    museo2 integer not null,
    museo3 integer not null,
    museo4 integer not null,
    museo5 integer not null,
    museo6 integer not null,
    monumento1 integer not null,
    monumento2 integer not null,
    monumento3 integer not null,
    monumento4 integer not null
);

CREATE TABLE biglietti(
    evento1 integer not null,
    evento2 integer not null,
    evento3 integer not null,
    evento4 integer not null,
    evento5 integer not null,
    museo1 integer not null,
    museo2 integer not null,
    museo3 integer not null,
    museo4 integer not null,
    museo5 integer not null,
    museo6 integer not null,
    monumento1 integer not null,
    monumento2 integer not null,
    monumento3 integer not null,
    monumento4 integer not null,
    numero_riga integer default 1
);