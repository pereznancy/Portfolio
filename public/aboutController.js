'use strict';

(function(module) {
  const aboutController = {};
  aboutController.body = () => {
    $('.tabs').hide();
    $('#hi').fadeIn(500);
  }
  module.aboutController = aboutController;
})(window);
