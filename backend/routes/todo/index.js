const express = require('express');
const todo = express.Router();
const controller = require('./controller');


/* GET users listing. */
todo.get('/', controller.fetchTodos);

module.exports = todo;