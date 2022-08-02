const invites = [
    {todo: 'Janet', done: true},
    {todo: 'John', done: false},
    {todo: 'Mike', done: false},
    {todo: 'Loren', done: true},
    {todo: 'Steve', done: false},
    {todo: 'Brittany', done: false},
    {todo: 'Ed', done: true},
    {todo: 'Carol', done: false},
    {todo: 'Lucy', done: false},
];

module.exports = {
    getAll: function() {
        return invites;
    }
};
