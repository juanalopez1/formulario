DROP SCHEMA IF EXISTS public CASCADE;

CREATE SCHEMA public;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE public.people (
    name     TEXT   NOT NULL,
    surname  TEXT   NOT NULL,
    email    TEXT   NOT NULL UNIQUE,
    id       TEXT UNIQUE PRIMARY KEY,
    rut      BIGINT NOT NULL UNIQUE,
    password TEXT   NOT NULL
);

CREATE VIEW curated_user AS
SELECT name AS "name!", surname AS "surname!", email AS "email!", id AS "id!", rut AS "rut!"
  FROM people;

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

CREATE OR REPLACE FUNCTION find_user(
    user_id TEXT
) RETURNS SETOF curated_user AS $$
BEGIN
    RETURN QUERY SELECT * FROM curated_user u WHERE u.id = user_id;
END;
$$ LANGUAGE plpgsql;

INSERT
  INTO people (name, surname, email, id, rut, password)
VALUES ('Pepito', 'Rodriguez', 'juancito@icloud.com', '5.440.395-7', 215777930016, encrypt_password('Juana123!'))
     , ('Pepote', 'Rodriguez', 'juancito2@icloud.com', '3.803.148-1', 215777930024, encrypt_password('Pepe123!'))
     , ('Cris', 'Rpia', 'ezponjares@gmail.com', '5.563.253-7', 215777930032, encrypt_password('Pep123!'))
     , ( 'Juana Inés', 'López Rocca', 'juanita@gmail.com', '5.501.862-4', 215777930040
       , encrypt_password('Pep123!'));

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