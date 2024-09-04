create extension if not exists pgcrypto;

create table if not exists people (
    -- cuando hacemos un insert no va este dato porque es SERIAL
    id_person serial primary key,
    name text not null,
    surname text not null,
    email text not null unique,
    uruguayan_id text not null unique,
    rut bigint not null unique,
    password text not null
);

insert into people (name, surname, email, uruguayan_id, rut, password)
    values('Pepito',
    'Rodriguez',
    'juancito@icloud.com',
    '5.440.395-7',
    214849650014,
    crypt('Juana123!', gen_salt('bf')));

