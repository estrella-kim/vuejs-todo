/**
 * @desc todo router
 */

const express = require('express');
const todo = express.Router();
const controller = require('./controller');

todo.get('/', controller.getUsers);

module.exports = todo;