/**
 * Created by veades on 2015-02-19.
 */
(function ($) {
	Drupal.behaviors.ubc_accordion = {
		attach: function (context) {
			$('.accordion-formatted', context).once('ubc_accordion', function () {
				$(this).find('.accordion-tab').click(function(e){
					e.preventDefault();
					//Expand or collapse this panel
					$(this).next().slideToggle('fast');
					$(this).parent().toggleClass('accordion-closed accordion-open');
				});
			});
		}
    };
})(jQuery);
