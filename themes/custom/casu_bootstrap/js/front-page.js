(function ($, Drupal) {
  Drupal.behaviors.frontPage = {
    attach: function (context, settings) {
      $(document).ready(function(){
        $('.region.region-navigation .logo img').attr('src', '/themes/custom/casu_bootstrap/logo.jpg');

        // Get the hrefs
        let href_bureau = $('#block-views-block-bureau-block-1 .views-field.views-field-name a').attr('href');
        let href_projets = $('#block-views-block-projets-block-1 .views-field.views-field-name a').attr('href');
        let href_contact = $('#block-views-block-contact-block-1 .views-field.views-field-name a').attr('href');

        // Adding some divs to each section
        $('#block-views-block-bureau-block-1').wrap("<div class='casu-icon' id='casu-bureau'></a></div>");
        $('#block-views-block-projets-block-1').wrap("<div class='casu-icon' id='casu-projets'></a></div>");
        $('#block-views-block-contact-block-1').wrap("<div class='casu-icon' id='casu-contact'></a></div>");
      });
    }
  };
})(jQuery, Drupal);
