/**
 * @desc auth model
 */
const database = require('../index');
const connection = database.connection();

const todoModel = {
    fetchTodos: function(callback) {
        return connection.query('SELECT * from todos', callback);
    }
};

module.exports = todoModel;