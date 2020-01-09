(function ($, Drupal) {
  Drupal.behaviors.contactAlter = {
    attach: function (context, settings) {
      $(document).ready(function(){
        $('#contact-message-contactez-nous-form .form-item-name label').text('Nom et Prénom');
        $('#contact-message-contactez-nous-form .form-item-mail label').text('Adresse Electronique(Email)');
        $('#contact-message-contactez-nous-form .form-item-subject-0-value label').text('Sujet');
        $('#contact-message-contactez-nous-form .form-item-message-0-value label').text('Message');
        $('#contact-message-contactez-nous-form button#edit-submit').text('Envoyez');
        $('#contact-message-contactez-nous-form button#edit-preview').text('Aperçu');
      });
    }
  };
})(jQuery, Drupal);
