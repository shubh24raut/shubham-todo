import "dotenv/config";
import express from "express";

import todoRoutes from "./routes/todo-routes.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", todoRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my Todo API");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
