import { createTodo as addTodo } from "../models/todoModel.js";

const createTodo = (req, res) => {
  const newTodo = addTodo(req.body);
  return res.status(201).json({
    success: true,
    data: newTodo,
    message: "Todo created successfully",
  });
};

export default createTodo;
