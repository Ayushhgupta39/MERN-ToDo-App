import Express from "express";
import { addTodo } from "../controller/todo-controller.js";

const route = Express.Router();

route.post('/todos', addTodo)

export default route;