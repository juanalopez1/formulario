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
    matchers: Matcher<T, R> | PartialMatcher<T, R>
): R {
    if (input in matchers && matchers[input]) {
        return matchers[input]!();
    } else {
        throw new Error(`No match found for ${String(input)}`);
    }
}

