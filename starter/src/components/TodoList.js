import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
	// const todos = useSelector((state) => state.todos );
	const todos = useSelector((state) => state.todos);

	// const todos = [
	// 	{ id: 1, title: 'todo1', completed: false },
	// 	{ id: 2, title: 'todo2', completed: false },
	// 	{ id: 3, title: 'todo3', completed: true },
	// 	{ id: 4, title: 'todo4', completed: false },
	
	// ];

	return (
		<ul className='list-group'>
        {Array.isArray(todos) ? (
            todos.map((todo) => (
                <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
            ))
        ) : (
            <li>No todos available</li>
        )}
    </ul>
	);
};

export default TodoList;
