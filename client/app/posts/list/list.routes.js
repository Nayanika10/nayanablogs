/* @ngInject */
export default function routes($stateProvider) {
  $stateProvider
    .state('posts.list', {
      url: '/',
      template: '<post-list></post-list>',
      data: {pageTitle: 'Post New JD'},
    });
}
