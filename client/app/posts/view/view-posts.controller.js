class ViewPostsController {
  /* @ngInject */
  constructor($http, $state, $stateParams, Session, LoginService, CreatePostService) {
    this.$http = $http;
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.Session = Session;
    this.LoginService = LoginService;
    this.CreatePostService = CreatePostService;
  }

  $onInit() {
    this.user = this.Session.read('user');
    this.$http.get(`/posts/${this.$stateParams.id}`)
      .then(({ data }) => (this.post = data));
    this.getComments();
  }

  getComments() {
    this.$http.get('/comments')
      .then(({ data: { results } }) => (this.comments = results));
  }

  createComment() {
    if(!this.Session.isLoggedIn) return this.LoginService.open();
    this.$http.post('/comments/create/', this.data)
      .then(() => (delete this.data));
  }

  deletePost() {
    this.$http.delete(`/posts/${this.$stateParams.id}/delete/`, this.post)
      .then(() => this.$state.go('posts.list'));
  }

  editPost() {
    this.CreatePostService
      .open(this.post)
      .then(() => this.$state.go('posts.list'));
  }
}

export default ViewPostsController;
