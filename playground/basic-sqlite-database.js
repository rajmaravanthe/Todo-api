var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
    'dialect': 'sqlite',
    'storage': __dirname + '/basic-sqlite-database.sqlite'
});

var Todo = sequelize.define('todo', {
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 250]
        }
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})

sequelize.sync().then(function () {
    console.log('Everything is synched');
    Todo.findById(1).then(function (todo) {
        if(todo) {
            console.log(todo.toJSON());
        }
    })
    // Todo.create({
    //     description: 'Take out trash',
    //     completed: false
    // }).then(function (todo) {
    //     console.log('Finished!');
    //     console.log(todo);
    // }).catch(function(e) {
    //     console.log(e);
    // })
});