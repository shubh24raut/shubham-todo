import { totoData } from "../db.js";
import { TOTO_ENUMS } from "../enums/todoEnums.js";


export const getTodos = () => totoData;

export const getTodoById = (id) => {
  return totoData.find((todo) => todo.id === id) || null;
};


export const createTodo = ({ title, desc, status = TOTO_ENUMS.TODO }) => {
  const nextId = totoData.length ? Math.max(...totoData.map((todo) => todo.id)) + 1 : 1;
  const newTodo = {
    id: nextId,
    title,
    desc,
    status,
  };

  totoData.push(newTodo);
  return newTodo;
};

export const updateTodo = (id, updates) => {
  const todo = getTodoById(id);
  if (!todo) return null;

  Object.assign(todo, updates);
  return todo;
};

export const deleteTodo = (id) => {
  const index = totoData.findIndex((todo) => todo.id === id);
  if (index === -1) return null;

  const [deletedTodo] = totoData.splice(index, 1);
  return deletedTodo;
};
