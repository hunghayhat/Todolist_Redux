const express = require('express'); 		//framework để tạo server và quản lý route
const dotenv = require('dotenv');			// module để quản lý các biến môi trường từ file .env
const colors = require('colors');	
const cors = require('cors'); 				// cho phép các request từ các domain khác
const { json } = require('body-parser');	// middleware để phân tích JSON request body
const { nanoid } = require('nanoid');

dotenv.config({ path: './config.env' });	// cấu hình biến môi trường

const app = express();

app.use(cors()); 	// cho phép các request từ domain khác
app.use(json());	// phân tích request body nếu nó có định dạng json

let todos = [
	{
		id: nanoid(),
		title: 'todo 1',
		completed: true,
	},
	{
		id: nanoid(),
		title: 'todo 2',
		completed: false,
	},
	{
		id: nanoid(),
		title: 'todo 3',
		completed: false,
	},
	{
		id: nanoid(),
		title: 'todo 4',
		completed: false,
	},
	{
		id: nanoid(),
		title: 'todo 5',
		completed: false,
	},
];

app.get('/todos', (req, res) => res.send(todos));

app.post('/todos', (req, res) => {
	const todo = { title: req.body.title, id: nanoid(), completed: false };
	todos.push(todo);
	return res.send(todo);
});

app.patch('/todos/:id', (req, res) => {
	const id = req.params.id;
	const index = todos.findIndex((todo) => todo.id == id);
	const completed = Boolean(req.body.completed);
	if (index > -1) {
		todos[index].completed = completed;
	}
	return res.send(todos[index]);
});

app.delete('/todos/:id', (req, res) => {
	const id = req.params.id;
	const index = todos.findIndex((todo) => todo.id == id);
	if (index > -1) {
		todos.splice(index, 1);
	}

	res.send(todos);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));
