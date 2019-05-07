let servicesTriagle 		= $('.services__nav-triagle-btn');
let servicesSubNav 			= $('.services__nav .sub-menu');
let topContactSecond 		= $('.header-top__contact-second');
let headerNavCont			= $('.header-nav__cont');
let headerNavBtn			= $('.header-nav__btn');
let headerNavBlock			= $('.header-nav__block');

headerNavBtn.click(function() {
	$(this).toggleClass('header-nav__btn--active');
	$(headerNavBlock).toggleClass('header-nav__block--active');
});

$('html[lang="ru"] .block-lang--en, html[lang="ru"] .block-lang--ua').remove();
$('html[lang="ua"] .block-lang--en, html[lang="ua"] .block-lang--ru').remove();
$('html[lang="en"] .block-lang--ru, html[lang="en"] .block-lang--ua').remove();
	
go();
window.addEventListener('resize', go);
function go() {	
	if ($(window).width() <= 992) {
		$('.services-list__item').click(function() {
			$(this).children('.services-list__item-block').children('.services-list__item-front').css('opacity', '0').css('pointer-events', 'none')
		});

		$('.header-top__contact-sec').append($('.header-top__contact-row'));
	} else {
		$('.header-top__contact-cont').append($('.header-top__contact-row'));
	};

	if ($(window).width() < 768) {
		$('.header-top__contact-row').owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			dots: false,
			items: 1,
			navContainer: $('.header-top__contact-sec-nav--mobile'),
			navText: ['<span class="header-top__contact-btn header-top__contact-btn-prev"></span>','<span class="header-top__contact-btn header-top__contact-btn-next"></span>']
		});
		$('.footer__row').owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			dots: false,
			items: 1,
			navContainer: $('.footer__nav'),
			navText: ['<span class="footer__nav-btn footer__nav-btn-prev"></span>','<span class="footer__nav-btn footer__nav-btn-next"></span>']
		});
	} else {
		$('.header-top__contact-row').trigger('destroy.owl.carousel');
		$('.footer__row').trigger('destroy.owl.carousel');
	}

	if ($(window).width() < 992) {
		$('.post__content-container').removeClass('container');
		$('.post__content-container').addClass('container-fluid');
	} else {
		$('.post__content-container').addClass('container');
		$('.post__content-container').removeClass('container-fluid');
	}
}

$('.btn--small').click( function() {
	$('.popup-form__cont').css('left', '0');
});

$('.popup-form__close').click( function() {
	$('.popup-form__cont').css('left', '-100vw');
});

$(".footer__contact-numbers-item:first-child").clone().appendTo(".footer__contact-bonus");

/*---  Add custom class with menu links  ---*/

$('.header-nav__block a').addClass('header-nav__link');
$('.header-nav__block .current-menu-item a').addClass('header-nav__link--active');
$('.header-nav__block .current-page-ancestor a').addClass('header-nav__link--active');
$('.services__nav a').addClass('services__nav-link');
$('.services__nav > li > a').after(`
	<div class="services__nav-triagle-btn"><i class="services__nav-triagle"></i></div>
`);

$('.services__nav > li > .services__nav-link').removeAttr('href')

$('.services__nav-triagle-btn').click(function() {
	$(this).parent().toggleClass('services__nav-item--active');
	$(this).next($('.sub-menu')).toggleClass('sub-menu--active')
});

for(let i = 1; i < $('.services-prices__block').length + 1; i++) {

	if($('.services-prices__block:nth-child(' + i +') .services-prices__card-cont').length === 2) {
		$('.services-prices__block:nth-child(' + i +')').removeClass('col-lg-3');
		$('.services-prices__block:nth-child(' + i +')').addClass('col-lg-6');

		$('.services-prices__block:nth-child(' + i +') .services-prices__card-cont').removeClass('col-lg-12 col-md-12');
		$('.services-prices__block:nth-child(' + i +') .services-prices__card-cont').addClass('col-lg-6 col-md-6');
	} 

	else if($('.services-prices__block:nth-child(' + i +') .services-prices__card-cont').length === 3) {
		$('.services-prices__block:nth-child(' + i +')').removeClass('col-lg-3');
		$('.services-prices__block:nth-child(' + i +')').addClass('col-lg-9');

		$('.services-prices__block:nth-child(' + i +') .services-prices__card-cont').removeClass('col-lg-12 col-md-12');
		$('.services-prices__block:nth-child(' + i +') .services-prices__card-cont').addClass('col-lg-4 col-md-4');
	} 

	else if($('.services-prices__block:nth-child(' + i +') .services-prices__card-cont').length === 4) {
		$('.services-prices__block:nth-child(' + i +')').removeClass('col-lg-3');
		$('.services-prices__block:nth-child(' + i +')').addClass('col-lg-12');

		$('.services-prices__block:nth-child(' + i +') .services-prices__card-cont').removeClass('col-lg-12 col-md-12');
		$('.services-prices__block:nth-child(' + i +') .services-prices__card-cont').addClass('col-lg-3 col-md-3');
	};

	for(let q = 1; q < $('.services-prices__block:nth-child(' + i +') .services-prices__card-subcard').length + 1; q++) {

		if($('.services-prices__block:nth-child(' + i +') .services-prices__card-cont:nth-child(' + q + ') .services-prices__card-subcard').length == 2) {
			$('.services-prices__block:nth-child(' + i +') .services-prices__card-cont:nth-child(' + q + ') .services-prices__card-subcard').removeClass('col-12');
			$('.services-prices__block:nth-child(' + i +') .services-prices__card-cont:nth-child(' + q + ') .services-prices__card-subcard').addClass('col-6');
			$('.services-prices__block:nth-child(' + i +') .services-prices__card-cont:nth-child(' + q + ') .services-prices__card-deadline').addClass('services-prices__card-deadline-cust-font');
		}

	}
}

if($(window).width() > 992) {
	let card = $('.content-row__nost-dipl-row .content-row__passport-reg-card');

	if(card.length == 4) {
		card.css('max-width', 'inherit');
		card.addClass('col-lg-3');
	}

	else if(card.length == 3) {
		card.css('max-width', 'inherit');
		card.addClass('col-lg-4google m');
	}

	else if(card.length == 2) {
		card.css('max-width', 'inherit');
		card.addClass('col-lg-6');
	}

	else if(card.length == 1) {
		card.css('max-width', 'inherit');
		card.addClass('col-lg-12');
	}
}

for(let i = 1; i < $('.contacts .contacts__cont').length; i++) {
	$($('.contacts .contacts__cont')[i]).css('display', 'none');
}

$($('.contacts__nav-btn')[0]).addClass('contacts__nav-btn--current');

$('.contacts__nav-btn').click(function() {
	$('.contacts__nav-btn').removeClass('contacts__nav-btn--current');
	$(this).addClass('contacts__nav-btn--current');
	$('.contacts .contacts__cont').css('display', 'none');
	$($('.contacts .contacts__cont')[$(this).index()]).css('display', 'block');
});

$('.post p').addClass('post__content col-lg-10 offset-lg-1');
$('.post__content-container--first .row').append($($('.post__content')[0]));

for(let i = 3; i < $('.post__list .post__list-col').length +1; i++) {
	$($('.post__list .post__list-col')[i]).addClass('post__list-col--remove');
}
$('.post__list-col--remove').remove();

for(let i = 0; $('.prices__table-row--main').length > i; i++) {
	for(let q = 1; $($('.prices__table-row--main')[i]).children('.prices__table-col--main').length > q; q++) {
		let mainWidth = $($('.prices__table-row--main')[i]).width() - 200;
		let colWidth = mainWidth / ($($('.prices__table-row--main')[i]).children('.prices__table-col--main').length - 1);
		$($($('.prices__table-row--main')[i]).children('.prices__table-col--main')[q]).css('min-width', colWidth);
	}
}