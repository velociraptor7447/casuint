(function ($, Drupal) {
  Drupal.behaviors.frontPage = {
    attach: function (context, settings) {
      $(document).ready(function(){
      //  $('.region.region-navigation .logo img').attr('src', '/themes/custom/casu_bootstrap/logo.jpg');

        // This is a hack
        $('#block-views-block-bureau-block-1 .views-col.col-1').css('width', '100%');
        $('#block-views-block-projets-block-1 .views-col.col-1').css('width', '100%');
        $('#block-views-block-contact-block-1 .views-col.col-1').css('width', '100%');

        // This is a hack
        $('.view-projets-full-view > .view-content > .table-responsive > .table').removeClass('table').addClass('table-casu');;
      });
    }
  };
})(jQuery, Drupal);
