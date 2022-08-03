const todos = [
	{id: 125223, todo: 'Feed Dogs', done: true},
	{id: 127904, todo: 'Learn Express', done: false},
	{id: 139608, todo: 'Buy Milk', done: false}
];

module.exports = {
	getAll,
	getOne,
	create,
	deleteOne,
};

function create(todo) {
	// Add the id
	todo.id = Date.now() % 1000000;
	// New todos wouldn't be done :)
	todo.done = false;
	todos.push(todo);
};

function deleteOne(id){
	const idx = todos.findIndex(todo => todo.id === parseInt(id));
	todos.splice(idx, 1);
};

function getOne(id) {
	// Use the Array.prototype.find iterator method
	return todos.find(todo => todo.id === parseInt(id));
};

function getAll() {
	return todos;
};