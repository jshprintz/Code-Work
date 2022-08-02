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