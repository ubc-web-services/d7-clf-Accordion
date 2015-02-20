/**
 * Created by veades on 2015-02-19.
 */
(function ($) {
    Drupal.behaviors.ubc_accordion = {
        attach: function (context, settings) {
            // accordions
            $('.accordion').find('.accordion-tab').click(function(e){
                e.preventDefault();
                //Expand or collapse this panel
                $(this).next().slideToggle('fast');
                $(this).parent().toggleClass('accordion-closed accordion-open');
                //$(this).find(">:first-child").toggleClass('icon-plus-sign icon-minus-sign');
                //Hide the other panels
                //$(".accordion-content").not($(this).next()).slideUp('fast');
            });
        }
    };
})(jQuery);