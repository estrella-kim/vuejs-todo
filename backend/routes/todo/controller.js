const todoModels = require('../../models/todo/index');

exports.getLists = (req, res, next) => {
    todoModels.getLists(function(error, results) {
        res.json(results);
    });
}
exports.insertLists = (req, res, next) => {
    todoModels.insertLists(req.body, function(error, results) {
        res.json(results);
    })
}