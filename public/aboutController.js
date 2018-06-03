'use strict';

(function(module) {
  const aboutController = {};
  aboutController.body = () => {
    Project.fetchAll();
    $('.tabs').hide();
    $('#hi').fadeIn(500);
    repos.requestRepos(repoView.index);
  }

  module.aboutController = aboutController;
})(window);
