'use strict';

(function(module) {
  const contactController = {};
  contactController.body = () => {
    $('.tabs').hide();
    $('#contact-me').fadeIn(500);
  }
  module.contactController = contactController;
})(window);
