import swaggerJsdoc from "swagger-jsdoc";

const options = {
  failOnErrors: true,
  definition: {
    openapi: "3.0.0",
    info: {
      title: "teste Sunne",
      version: "1.0.0",
    },
  },
  apis: ["./docs/**/*.yaml"],
};

const openapiSpecification = swaggerJsdoc(options);

export { openapiSpecification };
