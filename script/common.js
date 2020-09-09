// Слайдер
$(document).ready(function () {
	$('.slider').slick({
		slidesToShow: 3,
		centerMode: true,
		variableWidth: true,
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
								adaptiveHeight: true,
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
	
		// if (popup.length > 0) {
		// 	$('.send').click(function () {
		// 		popup.fadeOut(400, enabledScroll);
		// 	})
		// };
	});
});

// Отправка формы

$('#form').validate({
	rules: {
		email: {
			required: true,
			email: true
		},
		name: {
			required: true,
			minlength: 3
		},
		phone: {
			required: true,
			minlength: 11
		}
	},
	messages: {
		email: {
			required: 'Поле email обязательно для заполнения'
		},
		name: {
			required: 'Имя обязательно должно быть заполнено',
			minlength: 'Длина имени должна быть более 3-х символов'
		},
		phone: {
			required: 'Поле с телефоном обязательно для заполнения',
			minlength: 'Длина телефона должна быть 11 символов'
		}
	}
})

$('#form-2').validate({
	rules: {
		email: {
			required: true,
			email: true
		},
		name: {
			required: true,
			minlength: 3
		},
		phone: {
			required: true,
			minlength: 11
		},
				mail: {
			required: true,
		}
	},
	messages: {
		email: {
			required: 'Поле email обязательно для заполнения'
		},
		name: {
			required: 'Имя обязательно должно быть заполнено',
			minlength: 'Длина имени должна быть более 3-х символов'
		},
		phone: {
			required: 'Поле с телефоном обязательно для заполнения',
			minlength: 'Длина телефона должна быть 11 символов'
		},
				mail: {
			required: 'Поле обязательно для заполнения',
		}
	}
})

// inputmask
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

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