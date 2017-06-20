import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import LoginService from './login.service';

export default angular
  .module('naynablogsApp.login', [uiRouter, uiBootstrap])
  .service('LoginService', LoginService)
  .name;
