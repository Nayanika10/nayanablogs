import angular from 'angular';
import uiRouter from 'angular-ui-router';
import viewPosts from './view-posts.component';
import routing from './view-posts.routes';

export default angular
  .module('naynablogsApp.posts.view', [uiRouter])
  .config(routing)
  .component('postView', viewPosts)
  .name;
