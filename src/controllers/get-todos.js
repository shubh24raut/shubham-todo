import { getTodos as fetchTodos } from "../models/todoModel.js";

export const getTodos = (req, res) => {
  const todos = fetchTodos();
  return res.status(200).json({
    success: true,
    count: todos.length,
    message: "Todos fetched successfully",
    data: todos,
  });
};

export default getTodos;