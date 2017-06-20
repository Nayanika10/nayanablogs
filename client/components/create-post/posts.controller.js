class CreatePostController {
  /* @ngInject */
  constructor($http, $uibModalInstance, moment, post) {
    this.$http = $http;
    this.$uibModalInstance = $uibModalInstance;
    this.moment = moment;
    this.post = post;
  }

  $onInit() {
    this.data = Object.assign({}, this.post);
  }

  submit() {
    this.data.publish = this.moment().format('YYYY-MM-DD');
    let promise;
    if(this.post.id) {
      promise = this.$http.put(`/posts/${this.post.slug}/edit/`, this.data);
    } else {
      promise = this.$http.post('/posts/create/', this.data);
    }
    promise.then(() => this.$uibModalInstance.close('done'));
  }
}

export default CreatePostController;
