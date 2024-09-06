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

CREATE TYPE curated_user AS (
    uruguayan_id TEXT,
    name         TEXT,
    surname      TEXT,
    email        TEXT,
    rut          BIGINT
);

CREATE OR REPLACE FUNCTION encrypt_password(
    password TEXT
) RETURNS TEXT AS $$
BEGIN
    RETURN crypt(password, gen_salt('bf'));
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION check_password(
    encrypted_password   TEXT,
    unencrypted_password TEXT
) RETURNS BOOLEAN AS $$
BEGIN
    RETURN encrypted_password = crypt(unencrypted_password, encrypted_password);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_curated_users() RETURNS SETOF curated_user AS $$
BEGIN
    RETURN QUERY SELECT people.name, people.surname, people.email, people.uruguayan_id AS id, people.rut
                   FROM public.people;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION find_user(
    user_id TEXT
) RETURNS SETOF curated_user AS $$
BEGIN
    RETURN QUERY SELECT * FROM get_curated_users() u WHERE uruguayan_id = user_id;
END;
$$ LANGUAGE plpgsql;

INSERT
  INTO people (name, surname, email, uruguayan_id, rut, password)
VALUES ('Pepito', 'Rodriguez', 'juancito@icloud.com', '5.440.395-7', 214849650014, encrypt_password('Juana123!'))
     , ('Pepote', 'Rodriguez', 'juancito2@icloud.com', '3.803.148-1', 450303670014, encrypt_password('Pep123!'))
     , ('Cris', 'Rpia', 'ezponjares@gmail.com', '5.563.253-7', 4503036700196, encrypt_password('Pep123!'))
     , ( 'Juana Inés', 'López Rocca', 'juanita@gmail.com', '5.501.862-4', 123456789123
       , encrypt_password('Pep123!'));

SELECT *
  FROM get_curated_users();

SELECT *
  FROM find_user('5.563.253-7');

-- , ( 'Juana Inés', 'López Rocca', 'juanita@gmail.com', '5.501.862-4', 123456789123

UPDATE people
   SET name         = 'juana2'
     , surname      = 'López Rocca'
     , email        = 'juanita@gmail.com'
     , uruguayan_id = '5.501.862-4'
     , rut          = 12345678123
     , password     = encrypt_password('Juana123!')
 WHERE uruguayan_id = '5.501.862-4';

SELECT *
  FROM people;

SELECT *
  FROM people
 WHERE check_password(password, 'Juana123!');

CREATE OR REPLACE FUNCTION search_by_id_and_password(
    id       TEXT,
    password TEXT
) RETURNS SETOF curated_user AS $$
BEGIN
    RETURN QUERY SELECT p.uruguayan_id, p.name, p.surname, p.email, p.rut
                   FROM people p
                  WHERE p.uruguayan_id = $1
                    AND check_password(p.password, $2);
END;
$$ LANGUAGE plpgsql;

select * from search_by_id_and_password('5.501.862-4', 'Juana123!');
