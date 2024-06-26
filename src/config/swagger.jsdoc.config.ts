export const swaggerJsDocConfig = {
    definition: {
        openapi: "3.0.0", // Specification (optional, defaults to swagger: '2.0')
        basePath: "/",
        info: {
            title: "Bid Bid Bid", // Title (required)
            version: "1.0.0", // Version (required)
        },
    },
    // Path to the API docs
    apis: ["../**/*.ts"],
};
