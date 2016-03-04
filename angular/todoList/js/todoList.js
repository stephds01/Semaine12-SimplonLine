/**
 * Created by Stéphanie on 01/03/2016.
 */

//js/todoList.js
'use strict';



/**
 *Déclaration de l'application demoApp
 */
var demoApp = angular.module('demoApp',[
    //Dépendance du "module"
    'todoList'
]);


/**
 *Déclaration du module TodoList
 */
var todoList = angular.module('todoList',[]);


/**
 *Controlleur de l'application TODOLIST
 */
todoList.controller('todoCtrl',[$scope, function($scope){
    var todos = $scope.todos = [];
}]);


