DROP SCHEMA IF EXISTS public CASCADE;

CREATE SCHEMA public;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE public.people (
    uruguayan_id TEXT PRIMARY KEY,
    name         TEXT   NOT NULL,
    surname      TEXT   NOT NULL,
    email        TEXT   NOT NULL UNIQUE,
    rut          BIGINT NOT NULL UNIQUE,
    password     TEXT   NOT NULL
);

INSERT
  INTO people (name, surname, email, uruguayan_id, rut, password)
VALUES ('Pepito', 'Rodriguez', 'juancito@icloud.com', '5.440.395-7', 214849650014, crypt('Juana123!', gen_salt('bf')))
     , ('Pepote', 'Rodriguez', 'juancito2@icloud.com', '3.803.148-1', 450303670014, crypt('Pep123!', gen_salt('bf')))
     , ('Cris', 'Rpia', 'ezponjares@gmail.com', '5.563.253-7', 4503036700196, crypt('Pep123!', gen_salt('bf')))
     , ( 'Juana Inés', 'López Rocca', 'juanita@gmail.com', '5.501.862-4', 123456789123
       , crypt('Pep123!', gen_salt('bf')));

CREATE TYPE curated_user AS (
    name    TEXT,
    surname TEXT,
    email   TEXT,
    id      TEXT,
    rut     BIGINT
);

CREATE OR REPLACE FUNCTION get_curated_users() RETURNS SETOF curated_user AS $$
BEGIN
    RETURN QUERY SELECT people.name, people.surname, people.email, people.uruguayan_id AS id, people.rut
                   FROM public.people;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION find_user(user_id TEXT) RETURNS SETOF curated_user AS $$
    BEGIN
        RETURN QUERY SELECT * from get_curated_users() u WHERE u.id = user_id;
    END;
$$ LANGUAGE plpgsql;

SELECT *
  FROM get_curated_users();

select * from find_user('5.563.253-7');