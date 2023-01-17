import Express from "express";
import { getAllTodos } from "../controller/todo-controller.js";
import { addTodo } from "../controller/todo-controller.js";

const route = Express.Router();

route.post('/todos', addTodo)
route.get('/todos', getAllTodos);

export default route;