// TodosListComponent

// import libraries
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todosList.htm';

// define controller for component
class TodosListCtrl {
    // define constructor
    constructor() {
        // define tasks
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