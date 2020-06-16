(function($) {
	'use strict';

	let mouse_x = 0;
	let mouse_y = 0;

	let center_x = 0;
	let center_y = 0;

	$(document).on('ready mousemove resize', function(event) {
		mouse_x = event.clientX;
		mouse_y = event.clientY;

		center_x = $(window).width() / 2;
		center_y = $(window).height() / 2;
	});

	/**
	 * Tell the browser that we wish to perform an animation
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
	 */
	window.requestAnimationFrame(function animation() {

		const percent_x = (mouse_x / center_x * 100) - 100;
		const percent_y = (mouse_y / center_y * 100) - 100;
		const modifier = 200;

		$('[data-parallax]').each(function() {
			const $this = $(this);

			$this.css({
				'transform': `translate(${percent_x / modifier}%, ${percent_y / modifier}%)`,
				'--shadow-x': -( percent_x / ( modifier / 10 ) ) + 'px',
				'--shadow-y': -( percent_y / ( modifier / 10 ) ) + 'px'
			});
		});
		
		window.requestAnimationFrame(animation);

	});


})(jQuery || window.jQuwery);