// Слайдер
$(document).ready(function () {
	$('.slider').slick({
			slidesToShow: 3,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 2,
								centerMode: true,
								variableWidth: true,
								dots: true
							}
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								adaptiveHeight:true,
								centerMode: true,
								variableWidth: true,
								arrows: false,
								dots: true
							}
						}
					]
	});
});

// Летающие теги
$(document).ready(function () {
	$('.tags').addClass('tags__after-load');
	$('.block__figure').addClass('figure__after-load');
})

// Меню "бургер"

$(document).ready(function () {
	$('.burger').click(function (event) {
		$('.burger, .header__menu').toggleClass('active');
	});
});

// popup
$(document).ready(function () {
	$(function () {
		const popup = $('.popup')
	
		const disableScroll = function () {
			$('body').css({ 'overflow': 'hidden' })
		}
		
		const enabledScroll = function () {
			$('body').css({ 'overflow': 'visible' })
		}
	
		$('.call').click(function () {
			$(popup).fadeIn(400, disableScroll);
		});
	
		$(popup).click(function (event) {
			if (event.target == this) {
				$(this).fadeOut(400, enabledScroll);
			}
		});
	
		$('.popup__close').click(function (event) {
			if (popup.length > 0) {
				popup.fadeOut(400, enabledScroll);
			}
		});
	
		if (popup.length > 0) {
			$('.send').click(function () {
				popup.fadeOut(400, enabledScroll);
			})
		};
	});
});
