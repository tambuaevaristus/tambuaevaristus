(function($) {
	'use strict';

	var nav_offset_top = $('header').height() + 50;
	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed
	function navbarFixed() {
		if ($('.header_area').length) {
			$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if (scroll >= nav_offset_top) {
					$('.header_area').addClass('navbar_fixed');
				} else {
					$('.header_area').removeClass('navbar_fixed');
				}
			});
		}
	}
	navbarFixed();

	/*----------------------------------------------------*/
	/*  Testimonials Slider
    /*----------------------------------------------------*/
	// function testimonials_slider() {
	// 	if ($('.testi_slider').length) {
	// 		$('.testi_slider').owlCarousel({
	// 			loop: true,
	// 			margin: 30,
	// 			items: 2,
	// 			autoplay: true,
	// 			smartSpeed: 2500,
	// 			dots: true,
	// 			responsiveClass: true,
	// 			responsive: {
	// 				0: {
	// 					items: 1
	// 				},
	// 				991: {
	// 					items: 2
	// 				}
	// 			}
	// 		});
	// 	}
	// }
	// testimonials_slider();

	/*----------------------------------------------------*/
	/*  Google map js
    /*----------------------------------------------------*/

	
})(jQuery);
