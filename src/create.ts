import { schema2typebox } from "schema2typebox";
import { compile } from "json-schema-to-typescript";
import fs from "node:fs";

const dirToSave = `${__dirname}/`;

async function main() {
    const promise = await fetch("http://0.0.0.0:3000/docs/json");
    const response = await promise.json();
    const schemas: { [val: string]: any } = response.components.schemas;

    let fileContents = [
        '// Auto generated types. Do not modify.',
        // TODO: change nocheck to specifically allow unused imports
        '// @ts-nocheck',
        'import {Kind, SchemaOptions, Static, TSchema, TUnion, Type, TypeRegistry} from "@sinclair/typebox"',
        'import { Value } from "@sinclair/typebox/value";',
    ].join('\n');

    const pathToSave = dirToSave + "typebox-types.ts";

    for (const schemaKey in schemas) {
        const schema = schemas[schemaKey];
        console.log(schema)
        const compiled = await compile(schema, "somename");
        // The compilation as imports for every schema, which we dont want.
        const stripped = compiled
            .split('import { Value } from "@sinclair/typebox/value";')
            .findLast(() => true);

        console.log(stripped);
        fileContents += stripped + "";
    }

    fs.writeFile(pathToSave, fileContents, "utf8", (err) => {
        if (err !== null) {
            console.error(err.message);
        }
    });
};

main();
