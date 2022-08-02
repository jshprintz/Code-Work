const Todo = require('../models/todo');

// Index will generally represent showing all of the resources
// List all of the todos here
function index(req, res, next) {
    res.render('todos/index.ejs', {
        todos: Todo.getAll(),
    });
};

function show(req, res){
    console.log(req.params, " <- req.params")
    res.render('todos/show.ejs', {
        todo: Todo.getOne(req.params.id)
    });
};

function newTodo(req, res){
    res.render('todos/new.ejs')
}

function create(req, res){
    Todo.create(req.body)
    //everytime we change data, we redirect
    res.redirect('/todos'); // <- telling client to make a get request
    // to /todos now
}

module.exports = {
    //index: index,
    index, // ^short form of the above
    show,
    new: newTodo,
    create,
}