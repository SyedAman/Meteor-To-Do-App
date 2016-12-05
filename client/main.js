import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList/todosList';

// create angular module
angular.module('simple-todos', [
  angularMeteor,
  todosList.name
]);