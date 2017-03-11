$(document).ready(function() {
	
	$('.mob-menu-btn').click(function(event) {
		$('.menu').slideToggle('fast');
	});

	$(window).resize(function() {
		if ($(window).width() > 992) {
			$('.menu').show();
			$('.menu a').click(function() {
				$('.menu').show();
			});
		} else {
			$('.menu').hide();
			$('.menu a').click(function() {
				$('.menu').hide();
			});
		}
	});

	if ($(window).width() > 992) {
		$('.menu').show();
		$('.menu a').click(function() {
			$('.menu').show();
		});
	} else {
		$('.menu a').click(function() {
			$('.menu').slideUp('fast');
		});
	}

	//Slider
	$('.slider-main').slick({
		dots: true,
		arrows: false
	});

	//Menu active item
	$('.footwear-select-list li').click(function() {
		$(this).addClass('active-menu-item').siblings().removeClass('active-menu-item');
	});

});