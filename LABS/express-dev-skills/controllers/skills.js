const Skill = require('../models/skill');

// Index will generally represent showing all of the resources
// List all of the todos here
function index(req, res, next) {
    res.render('skills/index.ejs', {
        skills: Skill.getAll(),
    });
};

// function show(req, res){
//     console.log(req.params, " <- req.params")
//     res.render('skills/show.ejs', {
//         skill: Skill.getOne(req.params.id)
//     });
// };


module.exports = {
    //index: index,
    index, // ^short form of the above
    // show
}