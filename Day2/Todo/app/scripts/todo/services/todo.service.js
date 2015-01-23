/**
 * Created by roopeshk on 1/23/2015.
 */
angular.module("todo")
    .service("TodoService", [function () {
        return {
            todos: [],
            add: function (todo) {
                this.todos.push(todo);
            },
            delete: function (todo) {
                this.todos.splice(this.todos.indexOf(todo), 1);
            },
            clearCompleted: function () {
                for (var i = this.todos.length - 1; i >= 0; i--) {
                    if (this.todos[i].completed == true) {
                        this.todos.splice(i, 1);
                    }
                }
            }
        };
    }]);