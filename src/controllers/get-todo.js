import { getTodoById as getTodoById } from "../models/todoModel.js";

export const getTodo = (req, res) => {
  const id = Number(req.params.id);
  const todo = getTodoById(id);

  if (!todo) {
    return res.status(404).json({ success: false, message: "Todo not found" });
  }

  return res.status(200).json({ success: true, data: todo, message: "Todo fetched successfully" });
};
