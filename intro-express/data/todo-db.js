const todos = [
    {todo: 'Feed Dogs', done: true},
    {todo: 'Learn Express', done: false},
    {todo: 'Buy Milk', done: false},
    {todo: 'Dinner', done: true},
    {todo: 'Codewars', done: false},
    {todo: 'The Forest', done: false}
];

module.exports = {
getAll: function() {
    return todos;
    }
};
