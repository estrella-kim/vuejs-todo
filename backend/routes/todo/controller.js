const todoModels = require('../../models/todo/index');

exports.getTodos = (req, res, next) => {
    todoModels.fetchTodos(function(error, results) {
        res.json(results);
    });
}