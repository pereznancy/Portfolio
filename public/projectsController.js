'use strict';

(function(module) {
  const projectsController = {};
  projectsController.body = () => {
    Project.fetchAll();
    $('.tabs').hide();
    $('#projects').fadeIn(500);
  }
  module.projectsController = projectsController;
})(window);
