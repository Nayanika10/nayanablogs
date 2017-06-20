/* @ngInject */
export default function routes($stateProvider) {
  $stateProvider
    .state('posts.view', {
      url: '/:id',
      template: '<post-view></post-view>',
      data: {pageTitle: 'Post New JD'},
    });
}
