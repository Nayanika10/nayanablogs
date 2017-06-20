/* @ngInject */
export default function routes($stateProvider) {
  $stateProvider
    .state('posts', {
      abstract: true,
      url: '',
      template: '<div ui-view=""></div>',
    });
}
