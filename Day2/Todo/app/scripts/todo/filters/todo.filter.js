/**
 * Created by roopeshk on 1/23/2015.
 */
angular.module("todo")
    .filter("TodoFilter",[function() {
        return function(array,criteria) {
            var filteredArray=[];
            array.forEach(function(item) {
                if (criteria==='All'){
                    filteredArray.push(item);
                }
                else if (criteria==='Active'){
                    if (item.completed != true) {
                        filteredArray.push(item);
                    }
                }
                else if (criteria==='Completed') {
                    if (item.completed == true) {
                        filteredArray.push(item);
                    }
                }
            })
            return filteredArray;
        }
    }]);