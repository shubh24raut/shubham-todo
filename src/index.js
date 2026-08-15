import express from "express";

import todoRoutes from "./routes/todo-routes.js";
import { PORT, NODE_ENV } from "./config/env.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

app.use(express.json());
app.use("/api", todoRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my Todo API");
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
});
