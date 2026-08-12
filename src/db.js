import { TOTO_ENUMS } from "./enums/todoEnums.js";

export const totoData = [
  {
    id: 1,
    title: "Setup Express Server",
    desc: "Initialize npm, install express, and create the main server.js entry file.",
    status: TOTO_ENUMS.TODO,
  },
  {
    id: 2,
    title: "Configure Nodemon",
    desc: "Install nodemon as a dev dependency and add the 'npm run dev' script to package.json.",
    status: TOTO_ENUMS.COMPLETED,
  },
  {
    id: 3,
    title: "Add Environment Variables",
    desc: "Install the dotenv package and create a .env file to store the PORT and secrets.",
    status: TOTO_ENUMS.COMPLETED,
  },
  {
    id: 4,
    title: "Create Static Data",
    desc: "Generate a static JSON array with 20 mock items to use for testing the API.",
    status: TOTO_ENUMS.IN_PROGRESS,
  },
  {
    id: 5,
    title: "Build GET All Endpoint",
    desc: "Create a GET route at /api/todos to return the full list of todo items.",
    status: TOTO_ENUMS.TODO,
  },
  {
    id: 6,
    title: "Build GET Single Endpoint",
    desc: "Create a GET route at /api/todos/:id to return a specific todo based on its ID.",
    status: TOTO_ENUMS.TODO,
  },
  {
    id: 7,
    title: "Build POST Endpoint",
    desc: "Create a POST route at /api/todos to allow adding a new item to the data array.",
    status: TOTO_ENUMS.TODO,
  },
  {
    id: 8,
    title: "Build PUT Endpoint",
    desc: "Create a PUT route to update an existing todo's title, desc, or status by ID.",
    status: TOTO_ENUMS.TODO,
  },
  {
    id: 9,
    title: "Build DELETE Endpoint",
    desc: "Create a DELETE route to remove a specific todo item from the array.",
    status: TOTO_ENUMS.TODO,
  },
  {
    id: 10,
    title: "Error Handling",
    desc: "Implement global error handling middleware for catching and formatting Express errors.",
    status: TOTO_ENUMS.IN_PROGRESS,
  },
  {
    id: 11,
    title: "Input Validation",
    desc: "Use express-validator to ensure incoming POST and PUT requests have valid data.",
    status: TOTO_ENUMS.REVIEW,
  },
  {
    id: 12,
    title: "Add CORS",
    desc: "Install and configure cors middleware to allow frontend applications to make requests.",
    status: TOTO_ENUMS.COMPLETED,
  },
  {
    id: 13,
    title: "Setup Database Connection",
    desc: "Connect the Express server to a MongoDB instance using Mongoose.",
    status: TOTO_ENUMS.TODO,
  },
  {
    id: 14,
    title: "Define Mongoose Schema",
    desc: "Translate the static JSON structure into a robust Mongoose Todo schema.",
    status: TOTO_ENUMS.TODO,
  },
  {
    id: 15,
    title: "Write API Documentation",
    desc: "Document all the CRUD endpoints using Swagger UI or a Postman collection.",
    status: TOTO_ENUMS.REVIEW,
  },
  {
    id: 16,
    title: "Setup Authentication",
    desc: "Add JWT-based authentication to secure sensitive routes.",
    status: TOTO_ENUMS.TODO,
  },
  {
    id: 17,
    title: "Deploy to Production",
    desc: "Deploy the finalized Express application to a hosting platform like Render or Heroku.",
    status: TOTO_ENUMS.TODO,
  },
  {
    id: 18,
    title: "Unit Testing",
    desc: "Write automated tests for the API endpoints using Jest and Supertest.",
    status: TOTO_ENUMS.IN_PROGRESS,
  },
  {
    id: 19,
    title: "Setup CI/CD Pipeline",
    desc: "Configure GitHub Actions for automated testing and deployment on every push.",
    status: TOTO_ENUMS.TODO,
  },
  {
    id: 20,
    title: "Code Review",
    desc: "Review the pull request for the complete CRUD functionality before merging to main.",
    status: TOTO_ENUMS.REVIEW,
  },
];
