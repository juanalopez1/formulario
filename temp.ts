export interface paths {
    "/admin/grades/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get the list of grades */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Ok. Return a grades list. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-17"];
                    };
                };
            };
        };
        put?: never;
        /** Create a new grade */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["def-15"];
                };
            };
            responses: {
                /** @description Ok. Successful grade creation. */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-16"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/grades/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a grade by id */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Ok. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-16"];
                    };
                };
            };
        };
        /** Create a new grade */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["def-15"];
                };
            };
            responses: {
                /** @description Ok. Successful grade update. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-16"];
                    };
                };
            };
        };
        post?: never;
        /** Delete a course by id */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Ok. Successful course deletion */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/tests/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a new test */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["def-26"];
                };
            };
            responses: {
                /** @description Ok. Successful test creation. */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-27"];
                    };
                };
                /** @description Bad Request. */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-1"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evaluators/tests/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get the list of tests */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Ok. Return a tests list. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-36"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/students/evaluations/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Fetches an evaluation and its associated token by id and secretToken. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["def-45"];
                };
            };
            responses: {
                /** @description OK, returns an evaluation and its associated token. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-37"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/tests/{testId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a test by id */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    testId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Ok. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-27"];
                    };
                };
                /** @description Default Response */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-1"];
                    };
                };
                /** @description Default Response */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-2"];
                    };
                };
            };
        };
        /** Update a test by id */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    testId: number;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        id: number;
                        name: string;
                        initials: string;
                        description: string;
                        referencias?: string[];
                        isActive: boolean;
                    };
                };
            };
            responses: {
                /** @description Ok. Successful test update. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-27"];
                    };
                };
                /** @description Default Response */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-1"];
                    };
                };
                /** @description Default Response */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-2"];
                    };
                };
            };
        };
        post?: never;
        /** Delete a test by id */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    testId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Ok. Successful test deletion */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
                /** @description Default Response */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-1"];
                    };
                };
                /** @description Default Response */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-2"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evaluators/evaluations/{evaluationId}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get an evaluation by id */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    evaluationId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Ok. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-34"];
                    };
                };
                /** @description Default Response */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-2"];
                    };
                };
            };
        };
        /** Update an evaluation */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    evaluationId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["def-32"];
                };
            };
            responses: {
                /** @description Ok. Successful evaluation edit. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-34"];
                    };
                };
                /** @description Default Response */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-2"];
                    };
                };
            };
        };
        post?: never;
        /** Delete an evaluation */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    evaluationId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Ok. Successful evaluation delete. */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-0"];
                    };
                };
                /** @description Default Response */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-2"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/students/evaluations/{evaluationId}/finished": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Checks whether a student has finished his evaluation. */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    evaluationId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Ok, returns the validity boolean within an object. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            valid?: boolean;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/tests/{testId}/parts/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get the list of parts */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    testId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Ok. Return a parts list. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-20"];
                    };
                };
            };
        };
        put?: never;
        /** Create a new part */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    testId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["def-18"];
                };
            };
            responses: {
                /** @description Ok. Successfully created a new parts. */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-19"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/students/evaluations/{evaluationId}/grades/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    evaluationId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Ok. Return the parent test to the part that matches the id. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-46"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/students/evaluations/{evaluationId}/tests/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    evaluationId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Ok. Return the tests in the student's evaluation. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            tests?: components["schemas"]["def-38"][];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/tests/{testId}/parts/{partId}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a part by id */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    testId: string;
                    partId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Ok. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-19"];
                    };
                };
            };
        };
        /** Update a part by id */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    partId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["def-18"];
                };
            };
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-19"];
                    };
                };
            };
        };
        post?: never;
        /** Delete a question by id */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    testId: string;
                    partId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-0"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/students/evaluations/{evaluationId}/tests/{testId}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    evaluationId: string;
                    testId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Ok. The test from its id. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-38"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/tests/{testId}/parts/{partId}/questions/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get the list of questions */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    partId: number;
                    testId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Ok. Return a questions list. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-24"];
                    };
                };
            };
        };
        put?: never;
        /** Create a new question */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    partId: number;
                    testId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["def-22"];
                };
            };
            responses: {
                /** @description Ok. */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-23"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/tests/{testId}/parts/{partId}/questions/{questionId}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a question by id */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    partId: number;
                    testId: number;
                    questionId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Ok. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-23"];
                    };
                };
            };
        };
        /** Update a question by id */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    partId: number;
                    testId: number;
                    questionId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["def-22"];
                };
            };
            responses: {
                /** @description Ok. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-23"];
                    };
                };
            };
        };
        post?: never;
        /** Delete a question by id */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    partId: number;
                    testId: number;
                    questionId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-0"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/students/evaluations/{evaluationId}/tests/{testId}/parts/{partId}/questions/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    evaluationId: string;
                    testId: string;
                    partId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Ok. Return an array of questions which are not examples. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-43"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/students/evaluations/{evaluationId}/tests/{testId}/parts/{partId}/questions/examples": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    evaluationId: string;
                    testId: string;
                    partId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Ok. Return the parent test to the part that matches the id. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["def-43"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/students/evaluations/{evaluationId}/tests/{testId}/parts/{partId}/responses/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    evaluationId: string;
                    testId: string;
                    partId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["def-39"];
                };
            };
            responses: {
                /** @description Ok. Return an updated answer. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            ok?: boolean;
                        };
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * genericNoContentResponseSchema
         * @description Ok. No elements found
         */
        "def-0": null;
        /**
         * generic400ResponseSchema
         * @description Bad request
         */
        "def-1": {
            statusCode?: number;
            code?: string;
            error?: string;
            message: string;
        };
        /** generic404ResponseSchema */
        "def-2": {
            statusCode?: number;
            error?: string;
            message: string;
        };
        /**
         * idParamSchema
         * @description Id de la ruta
         */
        "def-3": {
            id: number;
        };
        /**
         * gradeTestReportSchema
         * @description Reporte para un grupo y test determinado
         */
        "def-4": {
            testId?: number;
            name: string;
            initials: string;
            description: string;
            referencias: string;
            /** Format: date */
            startDate: string;
            /** Format: date */
            finishDate: string;
            coments?: string;
        };
        /**
         * gradeReportSchema
         * @description Reporte de un grupo para una evaluación.
         */
        "def-5": {
            userName: string;
            evaluationId: number;
            evaluationDescription: string;
            evaluationInsitution: string;
            /** Format: date */
            evaluationDate: string;
            evaluationMotivo: string;
            gradeId: number;
            gradeName: string;
            gradeComents: string;
            statusName: string;
            tests: components["schemas"]["def-4"][];
        };
        /**
         * studentTestReportSchema
         * @description Reporte para un StudentEvaluation y test determinado
         */
        "def-6": {
            name?: string;
            initials?: string;
            description?: string;
            referencias?: string;
            /** Format: date */
            startDate?: string;
            /** Format: date */
            finishDate?: string;
            testComments?: string;
        };
        /**
         * studentReportSchema
         * @description Reporte de una StudentEvaluation.
         */
        "def-7": {
            evaluationId?: number;
            evaluationDescription?: string;
            evaluationInsitution?: string;
            /** Format: date */
            evaluationDate?: string;
            evaluationMotivo?: string;
            gradeId?: number;
            gradeName?: string;
            studentComents?: string;
            statusName?: string;
            tests?: components["schemas"]["def-6"][];
        };
        /**
         * gradesReportSchema
         * @description Lista de reportes por grupo.
         */
        "def-8": components["schemas"]["def-8"][];
        /**
         * studentsReportSchema
         * @description Lista de reportes de estudiantes por grupo.
         */
        "def-9": components["schemas"]["def-7"][];
        /**
         * userPOSTSchema
         * @description Id de la ruta
         */
        "def-10": {
            username?: string;
            /** Format: email */
            email?: string;
            password?: string;
        };
        /**
         * loginPostSchema
         * @description Email and password
         */
        "def-11": {
            /** Format: email */
            email?: string;
            password?: string;
        };
        /**
         * userResponseSchema
         * @description Id de la ruta
         */
        "def-12": {
            id: number;
            username: string;
            /** Format: email */
            email: string;
            isAdmin: boolean;
        };
        /**
         * loginResponseSchema
         * @description Id de la ruta
         */
        "def-13": {
            token: string;
            user: components["schemas"]["def-12"];
        };
        /** usersResponseSchema */
        "def-14": components["schemas"]["def-12"][];
        /** gradePostSchema */
        "def-15": {
            name: string;
        };
        /** gradeResponseSchema */
        "def-16": {
            id: number;
            name: string;
        };
        /** gradesResponseSchema */
        "def-17": components["schemas"]["def-16"][];
        /** partsPostSchema */
        "def-18": {
            name: string;
            description: string;
            exampleDescription: string;
            timeLimit: number;
            testId: number;
        };
        /** partResponseSchema */
        "def-19": {
            id: number;
            name: string;
            description: string;
            exampleDescription: string;
            timeLimit: number;
            testId: number;
        };
        /** partsResponseSchema */
        "def-20": components["schemas"]["def-19"][];
        /** partIdSchema */
        "def-21": {
            partId: number;
        };
        /** questionsPostSchema */
        "def-22": {
            isExample: boolean;
            description: string;
            number: number;
            partId: number;
        };
        /** questionResponseSchema */
        "def-23": {
            id: number;
            number: number;
            description: string;
            isExample: boolean;
            partId: number;
        };
        /** questionsResponseSchema */
        "def-24": components["schemas"]["def-23"][];
        /** questionIdSchema */
        "def-25": {
            questionId: number;
        };
        /** testPostSchema */
        "def-26": {
            name: string;
            initials: string;
            description: string;
        };
        /** testResponseSchema */
        "def-27": {
            /** Format: int32 */
            id: number;
            name: string;
            initials: string;
            description: string;
            referencias?: string[];
            isActive: boolean;
            /** Format: int32 */
            partCount: number;
        };
        /** testsResponseSchema */
        "def-28": components["schemas"]["def-27"][];
        /** testIdSchema */
        "def-29": {
            testId: number;
        };
        /** partForTestSchema */
        "def-30": {
            id: number;
            name?: string;
            timeLimit: number;
        };
        /** testForEvaluationSchema */
        "def-31": {
            id: number;
            initials?: string;
            parts: components["schemas"]["def-30"][];
        };
        /** evaluationPutSchema */
        "def-32": {
            /** Format: int32 */
            id: number;
            description: string;
            institution: string;
            /** Format: date-time */
            date: string;
            /** Format: int32 */
            statusId: number;
            /** Format: int32 */
            userId: number;
            tests: {
                id: number;
                initials?: string;
                parts: {
                    id: number;
                    name?: string;
                    timeLimit: number;
                }[];
            }[];
            gradeIds: number[];
            reason: string;
        };
        /** evaluationPostSchema */
        "def-33": {
            description: string;
            institution: string;
            /** Format: date-time */
            date: string;
            /** Format: int32 */
            userId: number;
            tests: components["schemas"]["def-31"][];
            gradeIds: number[];
            reason: string;
        };
        /** evaluationResponseSchema */
        "def-34": {
            /** Format: int32 */
            id: number;
            description: string;
            institution: string;
            /** Format: date-time */
            date: string;
            secretToken: string;
            /** Format: int32 */
            statusId: number;
            /** Format: int32 */
            userId: number;
            tests: {
                id: number;
                initials?: string;
                parts: {
                    id: number;
                    name: string;
                    timeLimit: number;
                }[];
            }[];
            gradeIds: number[];
            gradeNames: string[];
            reason: string;
        };
        /** evaluationsResponseSchema */
        "def-35": components["schemas"]["def-34"][];
        /** testsForEvaluationResponseSchema */
        "def-36": components["schemas"]["def-31"][];
        /** evaluationAndTokenResponseSchema */
        "def-37": {
            evaluation?: {
                id?: number;
                description?: string;
                institution?: string;
                /** Format: date-time */
                date?: string;
                secretToken?: string;
                statusId?: number;
                userId?: number;
            };
            token?: string;
        };
        /** testSchema */
        "def-38": {
            name?: string;
            initials?: string;
            description?: string;
            isActive?: boolean;
            isFinished?: boolean;
            id?: number;
            nextPart?: number;
        };
        /** answerChangeSchema */
        "def-39": {
            isChecked?: boolean;
            optionId?: number;
        };
        /** optionWithoutAnswerSchema */
        "def-40": {
            id?: number;
            text?: string;
        };
        /** partSchema */
        "def-41": {
            id?: number;
            name?: string;
            exampleDescription?: string;
            timeLimit?: number;
            exampleQuestion?: components["schemas"]["def-42"];
        };
        /** questionWithoutAnswerSchema */
        "def-42": {
            description?: string;
            number?: number;
            id?: number;
            options?: components["schemas"]["def-40"][];
        };
        /** questionsWithoutAnswerArraySchema */
        "def-43": components["schemas"]["def-42"][];
        /** gradeSchema */
        "def-44": {
            name?: string;
            id?: number;
        };
        /** studentEvaluationInputSchema */
        "def-45": {
            id?: number;
            secretToken?: string;
            student?: {
                /** Format: date-time */
                birthDate?: string;
                gradeId?: number;
                name?: string;
                lastName?: string;
            };
        };
        /** gradeArraySchema */
        "def-46": components["schemas"]["def-44"][];
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;

