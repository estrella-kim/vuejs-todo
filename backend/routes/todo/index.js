/**
 * @desc todo router
 */

const express = require('express');
const todo = express.Router();
const controller = require('./controller');

todo.get('/', controller.getLists);
todo.post('/', controller.insertLists);
todo.put('/', controller.updateLists);
todo.delete('/', controller.deleteLists);
module.exports = todo;