import express from "express";
import getTodos from "../controllers/get-todos.js";
import { getTodo } from "../controllers/get-todo.js";
import createTodo from "../controllers/create-todo.js";
import updateTodo from "../controllers/update-todo.js";
import deleteTodo from "../controllers/delete-todo.js";
import { todoValidationRules, validateTodo } from "../validators/todoValidator.js";

const router = express.Router();

router.get("/todos", getTodos);
router.get("/todos/:id", getTodo);
router.post("/todos", todoValidationRules, validateTodo, createTodo);
router.put("/todos/:id", todoValidationRules, validateTodo, updateTodo);
router.delete("/todos/:id", deleteTodo);

export default router;
