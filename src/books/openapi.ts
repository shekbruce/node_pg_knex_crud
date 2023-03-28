// @ts-ignore: Unreachable code error
import toOpenApi from "json-schema-to-openapi-schema";
import { booksSchema, booksSchemas, createableBookSchema, postBookSchema, updateBookSchema } from "./schema";

export const OpenAPI = {
  paths: {
    "/books": {
      get: {
        summary: "Get all books",
        responses: {
          "200": {
            description: "A list of users",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Books",
                },
              },
            },
          },
        },
      },
      post: {
        summary: "Create Books",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/BookCreatable",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "A list of users",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/BookCreated",
                },
              },
            },
          },
        },
      },
    },
    "/books/{id}": {
        get: {
            summary: "Get a book",
            parameters: [
              {
                in: "path",
                name: "id",
                required: true,
                schema: {
                  type: "integer",
                  minimum: 1,
                },
                description: "The book ID",
              },
            ],
            responses: {
              "200": {
                description: "Success",
                content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/Book",
                      },
                    },
                  },
              },
            },
          },
      put: {
        summary: "Update a book",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
              minimum: 1,
            },
            description: "The book ID",
          },
        ],
        requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/BookUpdatable",
                },
              },
            },
          },
        responses: {
          "204": {
            description: "Success",
          },
        },
      },
      delete: {
        summary: "Delete a book",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
              minimum: 1,
            },
            description: "The book ID",
          },
        ],
        responses: {
          "204": {
            description: "Success status code",
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Books: toOpenApi(booksSchemas),
      BookCreatable: toOpenApi(createableBookSchema),
      BookCreated: toOpenApi(postBookSchema),
      BookUpdatable: toOpenApi(updateBookSchema),
      Book: toOpenApi(booksSchema),
    },
  },
};