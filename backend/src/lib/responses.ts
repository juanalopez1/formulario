/// FIXME: THIS WHOLE FILE IS A WORK IN PROGRESS. - cr
import { Static, Type } from "@sinclair/typebox";

// Constant types
export const messageCode = Object.freeze({
    Ok: 200,
    Created: 201,
    Accepted: 202,
    "No Content": 204,
    "Bad Request": 400,
    Unauthorized: 401,
    Forbidden: 403,
    "Not Found": 404,
    "Method Not Allowed": 405,
    Conflict: 409,
    "Unsupported Media Type": 415,
    "Unprocessable Entity": 422,
    "Too Many Requests": 429,
    "Internal Server Error": 500,
    "Bad Gateway": 502,
    "Service Unavailable": 503,
    "Gateway Timeout": 504,
});

export type ResponseMessage = keyof typeof messageCode;

export type ResponseCode = (typeof messageCode)[ResponseMessage];

type ReverseMap<T extends Record<keyof T, keyof any>> = {
    [K in keyof T as T[K]]: K;
};

export const codeToMessage = Object.freeze(
    Object.fromEntries(
        Object.entries(messageCode).map(([key, val]) => [val, key])
    ) as ReverseMap<typeof messageCode>
);

export type SpecificResponse<
    S extends string,
    N extends ResponseMessage,
> = Static<ReturnType<typeof createResponseSchema<S, N>>>;

// Behaviour
export function createResponseSchema<
    TMessage extends string,
    TCodeMessage extends ResponseMessage,
>(codeMessage: TCodeMessage, message: TMessage) {
    return Type.Object({
        statusCode: Type.Literal(messageCode[codeMessage]),
        error: Type.Literal(codeMessage),
        message: Type.Literal(message),
    });
}

export function createResponse<S extends string, N extends ResponseMessage>(
    code: N,
    message: S
): SpecificResponse<S, N> {
    return {
        statusCode: messageCode[code],
        error: code,
        message: message,
    };
}

export function createResponses<T extends ResponseMessage[]>(input: T) {
    return input.map(
        (val) => [messageCode, createResponseSchema(val, val)] as const
    );
}
