// Auto generated types. Do not modify.
// @ts-nocheck
import {Kind, SchemaOptions, Static, TSchema, TUnion, Type, TypeRegistry} from "@sinclair/typebox"
import { Value } from "@sinclair/typebox/value";

export type Person = Static<typeof Person>;
export const Person = Type.Object(
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
    $id: "https://example.com/person.schema.json",
    $schema: "https://json-schema.org/draft/2020-12/schema",
    description: "Information about a person",
  }
);


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


export type Product = Static<typeof Product>;
export const Product = Type.Object(
  {
    productId: Type.Optional(
      Type.Number({ description: "The unique identifier for a product" })
    ),
    productName: Type.Optional(
      Type.String({ description: "Name of the product" })
    ),
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://example.com/product.schema.json",
    description: "A product from Acme's catalog",
  }
);
