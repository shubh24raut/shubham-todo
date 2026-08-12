import { deleteTodo as removeTodo } from "../models/todoModel.js";

const deleteTodo = (req, res) => {
  const id = Number(req.params.id);
  const deletedTodo = removeTodo(id);

  if (!deletedTodo) {
    return res.status(404).json({ success: false, message: "Todo not found" });
  }

  return res.status(200).json({
    success: true,
    data: deletedTodo,
    message: "Todo deleted successfully",
  });
};

export default deleteTodo;
