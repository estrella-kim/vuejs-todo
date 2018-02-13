/**
 * @desc auth model
 */
const database = require('../index');
const connection = database.connection();

const authModel = { 
    getLists : function(callback) {
        return connection.query('select * from todos', callback);
    },
    insertLists : function(req, callback) {
        console.log(req.text);
        var arr = [ req.text, 0];
        return connection.query( 'insert into todos(todo, isDone) values(?,?)', arr, callback);
    }
};

module.exports = authModel;
