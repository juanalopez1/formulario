export function exhaustiveMatchingGuard(_: never): never {
    throw new Error("Key should not have this value");
}

export function typeSafeKeys<T extends {}>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
}

type Matcher<T extends string | number | symbol, R> = {
    [K in T]: () => R;
};

type PartialMatcher<T extends string | number | symbol, R> = {
    [K in T]?: () => R;
} & {
    _: () => R;
};

export function exhaustiveMatch<T extends string | number | symbol, R>(
    input: T,
    matchers: Matcher<T, R> | PartialMatcher<T, R>,
): R {
    if (input in matchers && matchers[input]) {
        return matchers[input]!();
    } else {
        throw new Error(`No match found for ${String(input)}`);
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
    return function<R extends keyof T>(value: R) {
        return value;
    }
}

/**
 * Similar to {@link ensureKey}, but using an array of keys as a value. It is
 * recommended to pass an `as const` type to get the exact type back.
 * @see ensureKey
 * @example
 * type t = { id: number; email: string };
 * ; // Use it like this
 * const a = ensureKeyArray<t>()(["id", "email"] as const); // a => [""]
 * ; // Not like this
 * const b = ensureKeyArray<t>()(["id", "email"]); // a => ("id" | "email")[];
 * ; // Similar problem with just one element
 * const c = ensureKeyArray<t>()(["id"]); // a => "id"[];
 * ; // And even with zero
 * const d = ensureKeyArray<t>()([]); // a => never[];
 */
export function ensureKeyArray<
    T extends object,
>() {
    return function<R extends (keyof T)[]>(value: R) {
        return value;
    }
}
