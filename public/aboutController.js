'use strict';

(function(module) {
  const aboutController = {};
  aboutController.body = () => {
    Project.fetchAll();
    $('.tabs').hide();
    $('#hi').fadeIn(500);
  }
  module.aboutController = aboutController;
})(window);
