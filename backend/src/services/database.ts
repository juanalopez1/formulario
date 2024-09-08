import { PreparedQuery } from "@pgtyped/runtime";
import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
    host: "database",
    database: "personas",
    user: "admin",
    password: "admin",
    port: 5432,
});

export const query = async (
    text: string,
    params?: (string | number | string[] | number[])[],
) => {
    // const start = Date.now()
    const res = await pool.query(text, params);
    // const duration = Date.now() - start
    // console.log('executed query', { text, duration, rows: res.rowCount })
    return res;
};

export async function runPreparedQuery<
    T extends PreparedQuery<any, any>,
    R extends ReturnType<T["run"]>,
    P extends Parameters<T["run"]>["0"],
>(preparedQuery: T, params: P extends void ? {} : P): Promise<R> {
    return await (preparedQuery.run(params, pool) as R);
}
