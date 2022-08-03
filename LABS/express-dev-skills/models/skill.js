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
	getOne,
    create,
    deleteOne,
	update,
};

function getOne(id) {
	// Use the Array.prototype.find iterator method
	return skills.find(skill => skill.id === parseInt(id));
};

function getAll() {
	return skills;
};

function create(skill) {
	// Add the id
	skill.id = Date.now() % 1000000;
	// New skills wouldn't be done :)
	skill.done = false;
	skills.push(skill);
};

function deleteOne(id) {
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
};

function update(id) {
	const idx = skills.findIndex(skill => skill.id === parseInt(id));
	console.log(idx, " <- IDX");
}