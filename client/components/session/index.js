import angular from 'angular';
import SessionService from './session.service';

export default angular
  .module('naynablogsApp.session', [])
  .service('Session', SessionService)
  .name;
