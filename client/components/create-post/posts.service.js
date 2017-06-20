import controller from './posts.controller';
import template from './posts.pug';

class CreatePostService {
  /* @ngInject */
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }

  open(post = {}) {
    return this
      .$uibModal
      .open({
        size: 'lg',
        animation: true,
        template,
        controller,
        controllerAs: '$ctrl',
        resolve: { post },
      }).result;
  }
}

export default CreatePostService;
