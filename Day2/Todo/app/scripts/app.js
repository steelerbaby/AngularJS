angular.module("todoApp",[]).
    controller("MainCtrl",function($scope) {
        $scope.todos = [];

        $scope.add = function(){
            $scope.todos.push($scope.newTodo);
            $scope.newTodo = {};
        }

        $scope.delete = function(item) {
            var position = $scope.todos.indexOf(item);
            $scope.todos.splice(position,1);
        }

        $scope.clear = function() {
            $scope.todos = [];
        }

        $scope.done = function(item) {
            item.completed = true;
        }

        $scope.clearCompleted = function() {
            for(var i = $scope.todos.length-1; i>=0; i-- ) {
                if ($scope.todos[i].completed == true) {
                    $scope.todos.splice(i,1);
                }
            }
        }
    });