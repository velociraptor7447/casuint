(function ($, Drupal) {
  Drupal.behaviors.bureauView = {
    attach: function (context, settings) {
      $(document).ready(function(){
        $('.view-bureau-full-view > .view-content > .table-responsive > .table').removeClass('table').addClass('table-casu');
      });
    }
  };
})(jQuery, Drupal);
