class PostsController {

  /*@ngInject*/
  constructor($http, $scope, $state, Session, CreatePostService, LoginService) {
    this.$http = $http;
    this.$state = $state;
    this.Session = Session;
    this.CreatePostService = CreatePostService;
    this.LoginService = LoginService;
  }

  $onInit() {
    this.posts = [];
    this.$http.get('/posts/')
      .then(({ data: { results }}) => (this.posts = results));
  }

  createPost() {
    if(!this.Session.isLoggedIn) return this.LoginService.open();
    this.CreatePostService.open()
      .then(() => this.$state.reload());
  }

  getRowId(row) {
    return row.url.split('/')[row.url.split('/').length - 2];
  }
}

export default PostsController;
