import { PersonType } from "../tipos/persona.js";

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

/**
 * Returns the value its given. Its signature throws a compile-time error
 * if the given value is not a key of the T object.
 * @template T object whose keys value should match.
 * @template R optional parameter which must be specified if it is needed that
 * the returned type be the specific type of value
 * @param value The value which whill be returned.
 */
export function ensureKey<T extends object, R extends keyof T = keyof T>(
    value: R,
): R {
    return value;
}

export function ensureKeyArray<
    T extends object,
    R extends readonly (keyof T)[] = (keyof T)[],
>(value: R): R {
    return value;
}

// Example usage
// const _ = ensureKey<{ hi: number; asd: number }>("hi");
// const b = ensureKeyArray<PersonType>(["rut", "email"]);
// const template = ["rut", "email"] as const;
// const c = ensureKeyArray<PersonType, typeof template>(template);
