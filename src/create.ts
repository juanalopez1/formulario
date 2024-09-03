import { writeFile } from "fs";
import createClient from "openapi-fetch"; // THIS IS DOPE
import openapiTS, { astToString } from "openapi-typescript";

import { paths as SpotifyPaths } from "./api-schemas/spotify-schema";
import * as OASGenerator from "./generated-api/index";
import * as SpotifyOrval from "./orval/spotifyWebAPI";

async function tests() {
    const client = createClient<SpotifyPaths>();
    const { data, error } = await client.GET("/search", {
        params: {
            query: {
                q: "asd",
                type: ["show", "album", "episode"],
            },
        },
    });

    const b = await SpotifyOrval.search({
        q: "asd",
        type: [
            SpotifyOrval.SearchTypeItem.show,
            SpotifyOrval.SearchTypeItem.album,
            SpotifyOrval.SearchTypeItem.episode,
        ],
    });

    const a2 = await client.POST("/users/{user_id}/playlists", {
        params: {
            path: {
                user_id: "",
            },
        },
        body: {
            name: "asd",
        },
    });

    const b2 = await SpotifyOrval.createPlaylist("asd", {
        name: "asd",
    });
}

async function main() {
    const baseDirectory = `${__dirname}/api-schemas`;
    const schemaWithFilename: { schemaURL: string; filename: string }[] = [
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
