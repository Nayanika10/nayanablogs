import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './post.routes';
import PostList from './list';
import PostView from './view';

export default angular
  .module('naynablogsApp.posts', [
    uiRouter, PostList, PostView
  ])
  .config(routing)
  .name;
