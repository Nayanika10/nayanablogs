import angular from 'angular';
import uiRouter from 'angular-ui-router';
import PostListComponent from './list.component';
import routing from './list.routes';

export default angular
  .module('naynablogsApp.posts.list', [uiRouter])
  .config(routing)
  .component('postList', PostListComponent)
  .name;
