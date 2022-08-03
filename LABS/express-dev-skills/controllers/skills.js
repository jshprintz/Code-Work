const Skill = require('../models/skill');

// Index will generally represent showing all of the resources
// List all of the todos here
function index(req, res, next) {
    res.render('skills/index.ejs', {
        skills: Skill.getAll(),
    });
};

function show(req, res){
    console.log(req.params, " <- req.params")
    res.render('skills/show.ejs', {
        skill: Skill.getOne(req.params.id)
    });
};

function newTodo(req, res){
    res.render('skills/new.ejs')
}

function create(req, res){
    Skill.create(req.body)
    //everytime we change data, we redirect
    res.redirect('/skills'); // <- telling client to make a get request
    // to /skills now
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function update(req, res) {
    console.log(req.params.id);
    res.redirect('/skills');
}


module.exports = {
    //index: index,
    index, // ^short form of the above
    show,
    new: newTodo,
    create,
    delete: deleteSkill,
    update,
}