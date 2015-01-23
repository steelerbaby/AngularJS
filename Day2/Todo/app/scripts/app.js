angular.module("todoApp",[]).
    controller("MainCtrl",["$scope","TodoService",function($scope, TodoService) {
        $scope.todos = TodoService.todos;

        $scope.keypress = function() {
            if (event.keyCode == 13) {
                $scope.add();
            }
        }

        $scope.add = function(){
            console.log($scope.newTodo);
            TodoService.add($scope.newTodo);
            $scope.newTodo={};
        }

        $scope.delete = function(item) {
            TodoService.delete(item);
        }

        $scope.clear = function() {
            $scope.todos = [];
        }

        $scope.done = function(item) {
            item.completed = true;
        }

        $scope.clearCompleted = function() {
            TodoService.clearCompleted();
        }
    }])
    .service("TodoService",[function(){
        return {
            todos:[],
            add:function(todo){
                this.todos.push(todo);
            },
            delete:function(todo) {
                this.todos.splice(this.todos.indexOf(todo), 1);
            },
            clearCompleted:function() {
                for(var i = this.todos.length-1; i>=0; i-- ) {
                    if (this.todos[i].completed == true) {
                        this.todos.splice(i,1);
                    }
                }
            }
        };
    }]);