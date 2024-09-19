export function typeSafeKeys<T extends {}>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
}

type ObjectIndex = string | number | symbol;

type Matcher<T extends ObjectIndex, R> = {
    [K in T]: () => R;
};

/**
 * Executes each function in `branches`. Its signature guarantees that every
 * type within `T` is matched at a type level; no guarantees are made at
 * runtime.
 * @example
 * match<"a">({}); // Error!
 * match<"a">({ a() {} }); // This works!
 * match<"a" | "b">({ a() {} }); // Error, we miss one branch.
 * match<"a" | "b">({
 *  a() {},
 *  b() {},
 * }); // No error! Both a() and b() are executed.
 */
export function match<T extends ObjectIndex>(
    branches: [T] extends [never] ? never : Matcher<T, void>,
): void {
    for (const branch of typeSafeKeys(branches)) {
        const element = branches[branch];

        if (typeof element !== "function") {
            throw new Error(
                `Branch '${String(branch)}' is not a function. The backend devs have messed up.`,
            );
        }

        element();
    }
}

/**
 * Returns the passed value. It is recommended to pass an `as const` type to
 * get the exact type back, if using literals. This function is useful to
 * whenever some other signature does not enforce enough restrictions for actual
 * type-safety, so you can use this to ensure a compile-time error is thrown
 * when appropriate
 * @example
 * type myObj = { id: number; email: string };
 * const a = ensureType<(keyof myObj)[]>()(["id", "email"] as const); // a => ["id", "email"]
 */
export function ensureType<T>() {
    return function <R extends T>(value: R): R {
        return value;
    };
}
