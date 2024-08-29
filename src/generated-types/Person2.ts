// Auto generated types. Do not modify.
// ts-nocheck
import {Kind, SchemaOptions, Static, TSchema, TUnion, Type, TypeRegistry} from "@sinclair/typebox"
import { Value } from "@sinclair/typebox/value";


export type Person2 = Static<typeof Person2>;
export const Person2 = Type.Object(
  {
    firstName: Type.Optional(
      Type.String({ description: "The person's first name." })
    ),
    lastName: Type.Optional(
      Type.String({ description: "The person's last name." })
    ),
    age: Type.Optional(
      Type.Number({
        description:
          "Age in years which must be equal to or greater than zero.",
        minimum: 0,
      })
    ),
  },
  {
    $id: "asd",
    $schema: "https://json-schema.org/draft/2020-12/schema",
    description: "Information about a person",
  }
);

