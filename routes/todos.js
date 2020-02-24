var express = require('express');
var router = express.Router();
var db = require('../modals');
var helpers = require('../helpers/todos');


router.route('/')
    .get(helpers.getTodos)
    .post(helpers.postTodo)

router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleTodo)

module.exports = router;