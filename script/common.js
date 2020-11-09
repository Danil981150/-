// Слайдер
$(document).ready(function () {
	$('.slider').slick({
		// centerMode: true,
		// variableWidth: true,
		slidesToShow: 3,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								dots: true
							}
						},
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: 2,
								dots: true,
							}
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								adaptiveHeight: true,
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
	$('.menu__link').click(function (event) {
		if ('.active'.length > 0) {
			$('.burger, .header__menu').toggleClass('active');
		}
	})
});

// popup
$(document).ready(function () {
	$(function () {
		const popup = $('.popup')
		const firstPopup = $('#popup')
		const secondPopup = $('#popup-2')
	
		const disableScroll = function () {
			$('body').css({ 'overflow': 'hidden' })
		}
		
		const enabledScroll = function () {
			$('body').css({ 'overflow': 'visible' })
		}
	
		$('.call').click(function () {
			$(firstPopup).fadeIn(400, disableScroll);
		});
	
		$(firstPopup).click(function (event) {
			if (event.target == this) {
				$(this).fadeOut(400, enabledScroll);
			}
		});

		$('.project').click(function () {
			$(secondPopup).fadeIn(400, disableScroll);
		});
	
		$(secondPopup).click(function (event) {
			if (event.target == this) {
				$(this).fadeOut(400, enabledScroll);
			}
		});
	
		$('.popup__close').click(function (event) {
			event.preventDefault();
			if (popup.length > 0) {
				popup.fadeOut(400, enabledScroll);
			}
		});
	});
});

// Отправка формы #1
$(document).ready(function () {
	$('.send').hide();
	$('.popup__form--btn').on('click', function () {
		$('.success').hide();

		var name = $('.name').val();
		var phone = $('.phone').val();
		var email = $('.email').val();
		var mess = $('.mess').val();
		var fail = '';

		if (name.length < 3) {
			fail = 'Имя должно быть больше 3-х символов'
		} else if (phone.length != 11) {
			fail = 'Номер телефона должен содержать 11 символов'
		} else if (email.split('@').length - 1 == 0 || email.split('.').length - 1 == 0) {
			fail = 'Вы ввели неорректный email'
		} else if (mess.length < 5) {
			fail = 'Сообщение должно быть не иеньше 5 символов'
		};
		if (fail != ''){
			$('.success').html(fail);
			$('.success').show();
			return false;
		}
		
		$.ajax({
			url: 'ajax/mail.php',
			type: 'POST',
			cache: false,
			data: { 'name': name, 'phone': phone, 'email': email, 'mess': mess },
			dataType: 'html',
			success: function (data) {
				$('.popup__content').hide();
				$('.send').show();
				$('.popup__form').trigger('reset');
			}
		});
	});

	function app () {
		$('.popup__close').on('click', function () {
			$('.send').hide();
			$('.popup__content').show();
	})
	}
		setTimeout(app, 5000)

});

// Отправка формы #2

$(document).ready(function () {
	$('.send').hide();
	$('.popup__form-btn').on('click', function () {
		$('.success1').hide();

		var nameSecond = $('.name1').val();
		var phoneSecond = $('.phone1').val();
		var failSecond = '';

		if (nameSecond.length < 3) {
			failSecond = 'Имя должно быть больше 3-х символов'
		} else if (phoneSecond.length != 11) {
			failSecond = 'Номер телефона должен содержать 11 символов'
		} 
		if (failSecond != ''){
			$('.success1').html(failSecond);
			$('.success1').show();
			return false;
		}
		
		$.ajax({
			url: 'ajax/mail.php',
			type: 'POST',
			cache: false,
			data: { 'name1': nameSecond, 'phone1': phoneSecond },
			dataType: 'html',
			success: function (data) {
				$('.popup__content').hide();
				$('.send').show();
				$('.popup__form').trigger('reset');
			}
		});
	});

	function app () {
		$('.popup__close').on('click', function () {
			$('.send').hide();
			$('.popup__content').show();
	})
	}
		setTimeout(app, 5000)

});

// Скролл по ссылкам 

$(document).ready(function () {
	$('nav a').on('click', function (event) {
		event.preventDefault();

		let href = $(this).attr('href');

		let offset = $(href).offset().top;

		$('body,html').animate({
			scrollTop: offset,
		}, 700);
	})
})