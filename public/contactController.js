'use strict';

(function(module) {
  const contactController = {};
  contactController.body = () => {
    Project.fetchAll();
    $('.tabs').hide();
    $('#contact-me').fadeIn(500);
  }
  module.contactController = contactController;
})(window);
