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
		dots: false,
		arrows: false,
		autoplay: true
	});

	//Menu active item
	$('.footwear-select-list li').click(function() {
		$(this).addClass('active-menu-item').siblings().removeClass('active-menu-item');
	});

	//Footwear buttons / Auto height/width
	var
	footwear_btn_width = $('.footweat-type-btn').width(),
	footwear_btn_height = footwear_btn_width * 0.84;

	$('.footweat-type-btn').height(footwear_btn_height);

	$(window).resize(function() {
		footwear_btn_width = $('.footweat-type-btn').width();
		footwear_btn_height = footwear_btn_width * 0.84;
		$('.footweat-type-btn').height(footwear_btn_height);
	});

	//Custom Slideshow
	//Auto height/width
	var
	display_width = $('.slideshow-display').width(),
	item_width = (display_width - 30) / 3;

	$('.slideshow-item').width(item_width);
	$(window).resize(function() {
		display_width = $('.slideshow-display').width();
		item_width = (display_width - 30) / 3;
		$('.slideshow-item').width(item_width);
	});

	//------------------
	$('.slideshow-item a:first-child').click(function(event) {
		event.preventDefault();
	});
	$('.slideshow-item a').click(function(event) {
		//event.preventDefault();
		var
		path = $(this).find('img').attr('src'),
		title = $(this).attr('title');
		
		if (!$(this).closest('.slideshow-item').hasClass('active')) {
			$(this).closest('.slideshow-item').addClass('active').siblings().removeClass('active');
			
			$('.slideshow-display img').fadeOut(200, function() {
				$(this).attr('src', path).fadeIn(200);
				$(this).closest('a').attr('href', path);
				$(this).closest('a').attr('title', title);
			});
		};
	});

});