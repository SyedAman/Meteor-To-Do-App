// TodosListComponent

// import libraries
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todosList.html';

// define controller for component
class TodosListCtrl {
    // define constructor
    constructor() {
        // define tasks as an array of objects
        this.tasks = [
        {
            text: 'This is task 1'
        }, 
        {
            text: 'This is task 2'
        },
        {
            text: 'This is task 3'
        }];
    }
}

// export as an Angular module
export default angular.module('todosList', [
    angularMeteor
])
    // define component
    .component('todosList', {
        // reference template for component
        templateUrl: 'imports/components/todosList/todosList.html',
        // reference controller for component
        controller: TodosListCtrl
    });