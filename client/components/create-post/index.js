import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import CreatePostService from './posts.service';

export default angular
  .module('naynablogsApp.create-post', [uiRouter, uiBootstrap])
  .service('CreatePostService', CreatePostService)
  .name;
