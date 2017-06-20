import angular from 'angular';

class SessionService {
  /* @ngInject */
  constructor($window, $injector, $rootScope) {
    this.localStorage = $window.localStorage;
    this.$injector = $injector;
    this.$rootScope = $rootScope;
  }

  get isLoggedIn() {
    return !!(this.read('token'));
  }

  get accessToken() {
    if (!this.isLoggedIn) return new Error('AccessToken not found');
    return this.read('token');
  }

  create(key, value) {
    this.localStorage[key] = angular.toJson(value);
  }

  read(key) {
    return angular.fromJson(this.localStorage[key]);
  }

  remove(key) {
    return this.localStorage.removeItem(key);
  }

  destroy() {
    this.localStorage.clear();
  }

  update() {
    return this
      .$injector.get('$http')
      .get('~/users/me')
      .then(res => {
        this.create('userinfo', res.data);
        this.$rootScope.$broadcast('sessionUpdated', res.data);
        return res.data;
      });
  }
}

export default SessionService;
