const todoModels = require('../../models/todo/index');

exports.getUsers = (req, res, next) => {
    todoModels.getUsers(function(error, results) {
        res.json(results);
    });
}