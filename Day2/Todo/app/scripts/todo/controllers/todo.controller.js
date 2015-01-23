/**
 * Created by roopeshk on 1/23/2015.
 */

angular.module("todo")
    .controller("MainCtrl",["$scope","TodoService",function($scope, TodoService) {
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
    }]);