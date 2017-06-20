'use strict';

export function authInterceptor($rootScope, $q, $window, $injector, Util, Session) {
  'ngInject';

  var state;
  return {
    // Add authorization token to headers
    request(config) {
      config.headers = config.headers || {};
      if(config.url[0] === '/') config.url = `https://evening-badlands-69939.herokuapp.com/api${config.url}`;
      if(Session.read('token')) {
        config.headers.Authorization = `JWT ${Session.read('token')}`;
      }
      console.log(config)
      return config;
    },

    // Intercept 401s and redirect you to login
    responseError(response) {
      if(response.status === 401) {
        // remove any stale tokens
        Session.destroy();
        $window.location.reload();
      }
      return $q.reject(response);
    }
  };
}
