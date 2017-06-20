class RegisterController {
  /* @ngInject */
  constructor($http, $uibModalInstance) {
    this.$http = $http;
    this.$uibModalInstance = $uibModalInstance;
  }

  $onInit() {
  }

  submit() {
    this.$http.post('/users/register/', this.data)
      .then(() => this.$uibModalInstance.close('done'))
      .catch(() => (this.message = 'Something gone wrong, try again in sometime.'));
  }

  dismiss() {
    return this.$uibModalInstance.dismiss('cancel');
  }
}

export default RegisterController;
