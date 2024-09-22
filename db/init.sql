DROP SCHEMA IF EXISTS public CASCADE;

CREATE SCHEMA public;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE public.people (
    name      TEXT   NOT NULL,
    surname   TEXT   NOT NULL,
    email     TEXT   NOT NULL UNIQUE,
    id        TEXT UNIQUE PRIMARY KEY,
    rut       BIGINT NOT NULL UNIQUE,
    password  TEXT   NOT NULL
);

CREATE TYPE curated_user AS (
    name    TEXT,
    surname TEXT,
    email   TEXT,
    id      TEXT,
    rut     BIGINT
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
    RETURN QUERY SELECT people.name, people.surname, people.email, people.id, people.rut FROM public.people;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION find_user(
    user_id TEXT
) RETURNS SETOF curated_user AS $$
BEGIN
    RETURN QUERY SELECT * FROM get_curated_users() u WHERE u.id = user_id;
END;
$$ LANGUAGE plpgsql;

INSERT
  INTO people (name, surname, email, id, rut, password)
VALUES ('Pepito', 'Rodriguez', 'juancito@icloud.com', '5.440.395-7', 216885950010, encrypt_password('Pepito123!'))
     , ('Pepote', 'Rodriguez', 'juancito2@icloud.com', '3.803.148-1', 216298610018, encrypt_password('Pepote123!'))
     , ('Cris', 'Rpia', 'ezponjares@gmail.com', '5.563.253-7', 217094520019, encrypt_password('Cris123!'))
     , ( 'Juana Inés', 'López Rocca', 'juanita@gmail.com', '5.501.862-4', 214950090010
       , encrypt_password('Juana123!'))
     , ( 'Juan', 'Tanca', 'juanantoniotancarosete@gmail.com', '2.860.798-5', 217793540019
       , encrypt_password('Juancho123!'));

SELECT *
  FROM get_curated_users();

SELECT *
  FROM find_user('5.563.253-7');

-- , ( 'Juana Inés', 'López Rocca', 'juanita@gmail.com', '5.501.862-4', 123456789123

UPDATE people
   SET name     = 'juana2'
     , surname  = 'López Rocca'
     , email    = 'juanita@gmail.com'
     , id       = '5.501.862-4'
     , rut      = 12345678123
     , password = encrypt_password('Juana123!')
 WHERE id = '5.501.862-4';

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
    RETURN QUERY SELECT p.id, p.name, p.surname, p.email, p.rut
                   FROM people p
                  WHERE p.id = $1 AND check_password(p.password, $2);
END;
$$ LANGUAGE plpgsql;

SELECT *
  FROM search_by_id_and_password('5.501.862-4', 'Juana123!');

  WITH deleted AS (DELETE FROM people WHERE id = '5.501.862-4' RETURNING 1)
SELECT COUNT(*) AS deleted_rows
  FROM deleted;

SELECT *
  FROM people;