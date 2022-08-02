const skills = [
	{id: 125223, skill: 'HTML', done: true},
	{id: 127904, skill: 'CSS', done: true},
	{id: 139608, skill: 'JavaScript', done: true},
    {id: 142397, skill: 'React', done: false},
	{id: 159803, skill: 'Python', done: false},
	{id: 169823, skill: 'SQL', done: false}
];

module.exports = {
	getAll,
	// getOne
};

//   function getOne(id) {
// 	// Use the Array.prototype.find iterator method
// 	return todos.find(todo => todo.id === parseInt(id));
//   }

function getAll() {
	return skills;
}