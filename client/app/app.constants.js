'use strict';
import moment from 'moment';
import angular from 'angular';

export default angular.module('naynablogsApp.constants', [])
  .constant('moment', moment)
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
