class ChangeStateController {
  /* @ngInject */
  constructor($http, $uibModalInstance, $window, Session) {
    this.$http = $http;
    this.$window = $window;
    this.$uibModalInstance = $uibModalInstance;
    this.Session = Session;
  }

  $onInit() {
    this.data = { username: 'nayan@test.com', password: 'nayan@test.com', email: 'nayan@test.com' };
  }

  submit() {
    this.$http
      .post('/auth/token/', this.data)
      .then(({ data: { token } }) => {
        this.Session.create('token', token);
        return this.$http.post('/users/login/', Object.assign({ token }, this.data));
      })
      .then(({ data: user }) => {
        this.Session.create('user', user);
        this.$uibModalInstance.close();
        this.$window.location.reload();
      })
      .catch(err => console.log(err));
  }

  dismiss() {
    return this.$uibModalInstance.dismiss('cancel');
  }
}

export default ChangeStateController;
