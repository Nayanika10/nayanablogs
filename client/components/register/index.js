import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import RegisterService from './register.service';

export default angular
  .module('naynablogsApp.register', [uiRouter, uiBootstrap])
  .service('RegisterService', RegisterService)
  .name;
