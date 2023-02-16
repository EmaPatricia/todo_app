// Library import
import { useState } from "react";

// components import
import SearchComponent from "./searchcomponent";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

function TodoList() {
	const [todoList, setTodoList] = useState([
		{ name: "Do yoga", completed: false },
		{ name: "50 push-ups", completed: false },
		{ name: "Order pizza", completed: false },
	]);

	const handleAddTodo = (todoName) => {
		const newTodo = { name: todoName, completed: false };
		setTodoList([...todoList, newTodo]);
	};

	const handleCompleteTodo = (indexTodo) => {
		console.log(indexTodo);
	};

	return (
		<>
			<h1>Todo List</h1>
			<SearchComponent />
			{todoList.map((todo, index) => (
				<TodoItem
					name={todo.name}
					completed={todo.completed}
					key={"todo_" + index}
					onComplete={handleCompleteTodo}
					index={index}
				/>
			))}
			<AddTodo onAddTodo={handleAddTodo} />
		</>
	);
}

export default TodoList;
