const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skills')

/* GET home page. */
router.get('/', skillController.index);
// New skill
router.get('/new', skillController.new);
// list skills
router.get('/:id', skillController.show);
// create skill
router.post('/', skillController.create);
// Delete skill
router.delete('/:id', skillController.delete);

module.exports = router;