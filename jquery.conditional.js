/**
 * jQuery.Conditional
 * @version   0.1
 * @author    biohzrdmx <github.com/biohzrdmx>
 * @requires  jQuery 1.8+
 * @license   MIT
 * @copyright Copyright © 2015 biohzrdmx. All rights reserved.
 */
;(function($) {
	$.fn.conditional = function(options) {
		if (!this.length) { return this; }
		var opts = $.extend(true, {}, $.conditional.defaults, options);
		this.each(function() {
			var el = $(this),
				conditional = el.data('conditional');
			el.on(opts.eventName, function() {
				var value = el.val(),
					elements = $('[data-condition="'+ conditional +'"]');
				// Hide all
				opts.onDeactivate(elements, opts, function() {
					// Show the one(s) that match
					elements.each(function() {
						var element = $(this);
						if ( element.data('match') == value ) {
							opts.onActivate(element, opts);
						}
					});

				});
			});
			el.trigger(opts.eventName);
		});
		return this;
	};
	$.conditional = {
		defaults: {
			className: 'hide',
			eventName: 'change',
			onActivate: function(element, opts) {
				element.removeClass(opts.className);
			},
			onDeactivate: function(elements, opts, callback) {
				elements.addClass(opts.className);
				callback.call();
			},
			autoBind: true
		}
	};
	// Auto-binding via HTML5 datas
	if ( $.conditional.defaults.autoBind ) {
		$('[data-conditional]').conditional();
	}
})(jQuery);