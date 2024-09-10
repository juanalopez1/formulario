/* @name getCuratedPeople */
SELECT name, surname, email, id, rut
  FROM people;

/* @name getPersonFromId */
SELECT name, surname, email, id, rut
  FROM people
 WHERE id = :id!;

/* @name getPersonByIdAndPassword */
SELECT name, surname, email, id, rut
  FROM people
 WHERE id = :id!
   AND check_password(password, :password!);

/* @name createNewPerson */
INSERT
  INTO people (name, surname, email, id, rut, password)
VALUES (:name!, :surname!, :email!, :id!, :rut!, encrypt_password(:password!));

/* @name updatePerson */
UPDATE people
   SET name     = :name!
     , surname  = :surname!
     , email    = :email!
     , rut      = :rut!
     , password = :password!
 WHERE id = :id!;

/* @name deletePerson */
  WITH deleted AS (DELETE FROM people WHERE id = :id! RETURNING 1)
SELECT COUNT(*) AS deleted_rows
  FROM deleted;