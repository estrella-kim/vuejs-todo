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
exports.updateLists = (req, res) => {
    todoModels.updateLists(req.body, function(error, results) {
        res.json(results);
    })
}
exports.deleteLists = (req, res) => {
    todoModels.deleteLists(req.query, function(error, results) {
        res.json(results);
    })
}