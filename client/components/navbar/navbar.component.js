'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [{
    title: 'Home',
    state: 'main'
  }];
  isLoggedIn: Function;
  isAdmin: Function;
  getCurrentUser: Function;
  isCollapsed = true;

  constructor($window, Auth, RegisterService, LoginService, Session) {
    'ngInject';
    this.$window = $window;
    this.RegisterService = RegisterService;
    this.LoginService = LoginService;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
    this.Session = Session;
  }

  $onInit() {
    this.user = this.Session.read('user');
  }

  register() {
    this.RegisterService.open()
      .then(result => {
        if(result === 'done') return this.LoginService.open();
        return '';
      });
  }

  logout() {
    this.Session.destroy();
    this.$window.location.reload();
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.pug'),
    controller: NavbarComponent
  })
  .name;
