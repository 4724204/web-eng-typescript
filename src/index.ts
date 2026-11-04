import { fetchTodos, findTodo, toggleTodo, countIncompleteTodos } from "./todo-service.js";

const loaded = await fetchTodos();
console.log(loaded);

const count = await countIncompleteTodos();
console.log(`未完了のTODO件数: ${count}`);