import { FastifyPluginAsync } from "fastify";
import * as Queries from "../../queries/queries.queries.js";
import { runPreparedQuery } from "../../services/database.js";

const example: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
    fastify.get("/", async function(_request, _reply) {
        const result = await runPreparedQuery(Queries.getCuratedPeople, {});

        return result;
    });
};

export default example;
