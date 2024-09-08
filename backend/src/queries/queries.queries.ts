/** Types generated for queries found in "src/queries/queries.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type NumberOrString = number | string;

/** 'GetCuratedPeople' parameters type */
export type IGetCuratedPeopleParams = void;

/** 'GetCuratedPeople' return type */
export interface IGetCuratedPeopleResult {
  email: string;
  id: string;
  name: string;
  rut: string;
  surname: string;
}

/** 'GetCuratedPeople' query type */
export interface IGetCuratedPeopleQuery {
  params: IGetCuratedPeopleParams;
  result: IGetCuratedPeopleResult;
}

const getCuratedPeopleIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT name, surname, email, id, rut\n  FROM people"};

/**
 * Query generated from SQL:
 * ```
 * SELECT name, surname, email, id, rut
 *   FROM people
 * ```
 */
export const getCuratedPeople = new PreparedQuery<IGetCuratedPeopleParams,IGetCuratedPeopleResult>(getCuratedPeopleIR);


/** 'GetPersonFromId' parameters type */
export interface IGetPersonFromIdParams {
  id: string;
}

/** 'GetPersonFromId' return type */
export interface IGetPersonFromIdResult {
  email: string;
  id: string;
  name: string;
  rut: string;
  surname: string;
}

/** 'GetPersonFromId' query type */
export interface IGetPersonFromIdQuery {
  params: IGetPersonFromIdParams;
  result: IGetPersonFromIdResult;
}

const getPersonFromIdIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":63,"b":66}]}],"statement":"SELECT name, surname, email, id, rut\n  FROM people\n WHERE id = :id!"};

/**
 * Query generated from SQL:
 * ```
 * SELECT name, surname, email, id, rut
 *   FROM people
 *  WHERE id = :id!
 * ```
 */
export const getPersonFromId = new PreparedQuery<IGetPersonFromIdParams,IGetPersonFromIdResult>(getPersonFromIdIR);


/** 'GetPersonByIdAndPassword' parameters type */
export interface IGetPersonByIdAndPasswordParams {
  id: string;
  password: string;
}

/** 'GetPersonByIdAndPassword' return type */
export interface IGetPersonByIdAndPasswordResult {
  email: string;
  id: string;
  name: string;
  rut: string;
  surname: string;
}

/** 'GetPersonByIdAndPassword' query type */
export interface IGetPersonByIdAndPasswordQuery {
  params: IGetPersonByIdAndPasswordParams;
  result: IGetPersonByIdAndPasswordResult;
}

const getPersonByIdAndPasswordIR: any = {"usedParamSet":{"id":true,"password":true},"params":[{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":63,"b":66}]},{"name":"password","required":true,"transform":{"type":"scalar"},"locs":[{"a":100,"b":109}]}],"statement":"SELECT name, surname, email, id, rut\n  FROM people\n WHERE id = :id!\n   AND check_password(password, :password!)"};

/**
 * Query generated from SQL:
 * ```
 * SELECT name, surname, email, id, rut
 *   FROM people
 *  WHERE id = :id!
 *    AND check_password(password, :password!)
 * ```
 */
export const getPersonByIdAndPassword = new PreparedQuery<IGetPersonByIdAndPasswordParams,IGetPersonByIdAndPasswordResult>(getPersonByIdAndPasswordIR);


/** 'CreateNewPerson' parameters type */
export interface ICreateNewPersonParams {
  email: string;
  id: string;
  name: string;
  password: string;
  rut: NumberOrString;
  surname: string;
}

/** 'CreateNewPerson' return type */
export type ICreateNewPersonResult = void;

/** 'CreateNewPerson' query type */
export interface ICreateNewPersonQuery {
  params: ICreateNewPersonParams;
  result: ICreateNewPersonResult;
}

const createNewPersonIR: any = {"usedParamSet":{"name":true,"surname":true,"email":true,"id":true,"rut":true,"password":true},"params":[{"name":"name","required":true,"transform":{"type":"scalar"},"locs":[{"a":71,"b":76}]},{"name":"surname","required":true,"transform":{"type":"scalar"},"locs":[{"a":79,"b":87}]},{"name":"email","required":true,"transform":{"type":"scalar"},"locs":[{"a":90,"b":96}]},{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":99,"b":102}]},{"name":"rut","required":true,"transform":{"type":"scalar"},"locs":[{"a":105,"b":109}]},{"name":"password","required":true,"transform":{"type":"scalar"},"locs":[{"a":129,"b":138}]}],"statement":"INSERT\n  INTO people (name, surname, email, id, rut, password)\nVALUES (:name!, :surname!, :email!, :id!, :rut!, encrypt_password(:password!))"};

/**
 * Query generated from SQL:
 * ```
 * INSERT
 *   INTO people (name, surname, email, id, rut, password)
 * VALUES (:name!, :surname!, :email!, :id!, :rut!, encrypt_password(:password!))
 * ```
 */
export const createNewPerson = new PreparedQuery<ICreateNewPersonParams,ICreateNewPersonResult>(createNewPersonIR);


/** 'UpdatePerson' parameters type */
export interface IUpdatePersonParams {
  email: string;
  id: string;
  name: string;
  password: string;
  rut: NumberOrString;
  surname: string;
}

/** 'UpdatePerson' return type */
export type IUpdatePersonResult = void;

/** 'UpdatePerson' query type */
export interface IUpdatePersonQuery {
  params: IUpdatePersonParams;
  result: IUpdatePersonResult;
}

const updatePersonIR: any = {"usedParamSet":{"name":true,"surname":true,"email":true,"rut":true,"password":true,"id":true},"params":[{"name":"name","required":true,"transform":{"type":"scalar"},"locs":[{"a":32,"b":37}]},{"name":"surname","required":true,"transform":{"type":"scalar"},"locs":[{"a":57,"b":65}]},{"name":"email","required":true,"transform":{"type":"scalar"},"locs":[{"a":85,"b":91}]},{"name":"rut","required":true,"transform":{"type":"scalar"},"locs":[{"a":111,"b":115}]},{"name":"password","required":true,"transform":{"type":"scalar"},"locs":[{"a":135,"b":144}]},{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":158,"b":161}]}],"statement":"UPDATE people\n   SET name     = :name!\n     , surname  = :surname!\n     , email    = :email!\n     , rut      = :rut!\n     , password = :password!\n WHERE id = :id!"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE people
 *    SET name     = :name!
 *      , surname  = :surname!
 *      , email    = :email!
 *      , rut      = :rut!
 *      , password = :password!
 *  WHERE id = :id!
 * ```
 */
export const updatePerson = new PreparedQuery<IUpdatePersonParams,IUpdatePersonResult>(updatePersonIR);


/** 'DeletePerson' parameters type */
export interface IDeletePersonParams {
  id: string;
}

/** 'DeletePerson' return type */
export interface IDeletePersonResult {
  deleted_rows: string | null;
}

/** 'DeletePerson' query type */
export interface IDeletePersonQuery {
  params: IDeletePersonParams;
  result: IDeletePersonResult;
}

const deletePersonIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":47,"b":50}]}],"statement":"WITH deleted AS (DELETE FROM people WHERE id = :id! RETURNING 1)\nSELECT COUNT(*) AS deleted_rows\n  FROM deleted"};

/**
 * Query generated from SQL:
 * ```
 * WITH deleted AS (DELETE FROM people WHERE id = :id! RETURNING 1)
 * SELECT COUNT(*) AS deleted_rows
 *   FROM deleted
 * ```
 */
export const deletePerson = new PreparedQuery<IDeletePersonParams,IDeletePersonResult>(deletePersonIR);


