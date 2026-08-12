import { updateTodo as modifyTodo } from "../models/todoModel.js";

const updateTodo = (req, res) => {
  const id = Number(req.params.id);
  const updatedTodo = modifyTodo(id, req.body);

  if (!updatedTodo) {
    return res.status(404).json({ success: false, message: "Todo not found" });
  }

  return res.status(200).json({
    success: true,
    data: updatedTodo,
  });
};

export default updateTodo;
