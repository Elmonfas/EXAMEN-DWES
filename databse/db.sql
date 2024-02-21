drop database if exists marvel;

create database marvel;

use marvel;

create table users (
	id INT auto_increment primary key,
    nombre VARCHAR(100) NOT NULL,
    email varchar(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

insert into users (nombre, email, password) values ("admin", "admin@admin.com", "admin");

create table peliculas (
	titulo VARCHAR(50) NOT NULL,
    img VARCHAR(200) NOT NULL
);