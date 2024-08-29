import openapiTS, { astToString } from "openapi-typescript";
import createClient from "openapi-fetch"; // THIS IS DOPE
import { writeFile } from "fs";
import { paths } from "./api-schemas/spotify-schema";

const client = createClient<paths>();

async function main() {
    const baseDirectory = `${__dirname}/api-schemas`;
    const schemaWithFilename: {
        schemaURL: string;
        filename: string;
    }[] = [
            {
                schemaURL:
                    "https://converter.swagger.io/api/convert?url=https%3A%2F%2Fraw.githubusercontent.com%2Fmusixmatch%2Fmusixmatch-sdk%2Fmaster%2Fswagger%2Fswagger.json",
                filename: "musixmatch-schema.d.ts",
            },
            {
                schemaURL:
                    "https://developer.spotify.com/reference/web-api/open-api-schema.yaml",
                filename: "spotify-schema.d.ts",
            },
        ];

    const promises = schemaWithFilename.map(async ({ schemaURL, filename }) => {
        const filePath = `${baseDirectory}/${filename}`;
        console.log(`Creating ${filePath} from ${schemaURL}`);
        return {
            ast: await openapiTS(new URL(schemaURL)),
            filePath,
        };
    });

    for (const result of await Promise.allSettled(promises)) {
        if (result.status === "rejected") {
            console.error("ERROR: Could not create a file.");
            continue;
        }

        const { ast, filePath } = result.value;
        const contents = astToString(ast);

        writeFile(filePath, contents, (err) => {
            if (err !== null) {
                console.error(err);
            }
        });

        console.log(`Created ${filePath}`);
    }
}

main();
