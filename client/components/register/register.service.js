import controller from './register.controller';
import template from './register.pug';

class RegisterService {
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
      }).result;
  }
}

export default RegisterService;
