'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import 'angular-socket-io';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import 'angular-validation-match';

import {
  routeConfig
} from './app.config';

import AppComponent from './app.component';
import _Auth from '../components/auth/auth.module';
import navbar from '../components/navbar/navbar.component';
import Post from './posts';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';
import LoginService from '../components/login';
import SessionService from '../components/session';
import RegisterService from '../components/register';
import CreatePostService from '../components/create-post';

import './app.scss';

angular.module('naynablogsApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter,
  uiBootstrap, _Auth, 'validation.match', navbar, Post, constants, LoginService, RegisterService,
  CreatePostService, socket, util, SessionService,
])
  .component('naynaApp', AppComponent)
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['naynablogsApp'], {
      strictDi: true
    });
  });
