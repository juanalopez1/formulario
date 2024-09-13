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

// TODO: JUANA. Check if the style of documentation below helps you.

// The below functions are hideous, but typescript forces me to make them like
// that. AFAIK, there is no other solution that's more ergonomic. - cr

/**
 * Creates a function that returns the value its given, throwing a compile time
 * error if its not keyof T. This cannot be written as a single function as both
 * generic arguments would have to be specified if that were the case. Use this
 * for type-safety when ommiting keys in typebox, and any other use you may see
 * fit.
 * @example
 * ensureKey<T>()(value); // Use it like this
 * const a = ensureKey<{ id: number }>()("email"); // Error
 * const b = ensureKey<{ id: number }>()("id"); // No error, b => "id"
 */
export function ensureKey<T extends object>() {
    return function <R extends keyof T>(value: R) {
        return value;
    };
}

/**
 * Similar to {@link ensureKey}, but using an array of keys as a value. It is
 * recommended to pass an `as const` type to get the exact type back.
 * @see ensureKey
 * @example
 * type t = { id: number; email: string };
 * ; // Use it like this
 * const a = ensureKeyArray<t>()(["id", "email"] as const); // a => ["id", "email"]
 * ; // Not like this
 * const b = ensureKeyArray<t>()(["id", "email"]); // a => ("id" | "email")[];
 * ; // Similar problem with just one element
 * const c = ensureKeyArray<t>()(["id"]); // a => "id"[];
 * ; // And even with zero
 * const d = ensureKeyArray<t>()([]); // a => never[];
 */
export function ensureKeyArray<T extends object>() {
    return function <R extends (keyof T)[]>(value: R) {
        return value;
    };
}
