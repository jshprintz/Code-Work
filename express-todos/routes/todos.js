const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todos')

/* GET users listing. */
// / todos because we have to mount it in the server.js
router.get('/', todoController.index);
router.get('/:id', todoController.show);

module.exports = router;