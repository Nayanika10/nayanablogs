import controller from './login.controller';
import template from './login.pug';

class LoginService {
  /* @ngInject */
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }

  open() {
    return this
      .$uibModal
      .open({
        size: 'lg',
        animation: true,
        template,
        controller,
        controllerAs: '$ctrl',
      });
  }
}

export default LoginService;
