var swiper3 = new Swiper('#slider', {
	slidesPerView: 3,
	spaceBetween: 34,
	loop: true,

	breakpoints: {
		375: {
			slidesPerView: 1,
			spaceBetween: 10,
			observer: true,
		},
		750: {
			slidesPerView: 2,
			spaceBetween: 34,
			observer: true,
		},
		970: {
			slidesPerView: 2,
			spaceBetween: 50,
			observer: true,
		},
		1430: {
			slidesPerView: 3,
			spaceBetween: 20,
			observer: true,
		},
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
});