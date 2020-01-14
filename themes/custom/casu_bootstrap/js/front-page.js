(function ($, Drupal) {
  Drupal.behaviors.frontPage = {
    attach: function (context, settings) {
      $(document).ready(function(){
        $('.region.region-navigation .logo img').attr('src', '/themes/custom/casu_bootstrap/logo.jpg');

        // Get the hrefs
        $('#block-views-block-bureau-block-1 .views-col.col-1').css('width', '100%');
        $('#block-views-block-projets-block-1 .views-col.col-1').css('width', '100%');
        $('#block-views-block-contact-block-1 .views-col.col-1').css('width', '100%');



        // Adding some divs to each section
      //  $('#block-views-block-bureau-block-1 span a').append("<i class='fa fa-file-text-o fa-3x'></i>");
        //$('#block-views-block-bureau-block-1').wrap("<div class='casu-icon' id='casu-bureau'></a></div>");
        //$('#block-views-block-projets-block-1').wrap("<div class='casu-icon' id='casu-projets'></a></div>");
        //$('#block-views-block-contact-block-1').wrap("<div class='casu-icon' id='casu-contact'></a></div>");
      });
    }
  };
})(jQuery, Drupal);
