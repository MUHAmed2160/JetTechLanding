/* ==============================================
  	Testimonial Slider
  	=============================================== */

$('a.page-scroll').click(function () {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top - 40
			}, 900);
			return false;
		}
	}
});


//    $('body').scrollspy({ 
//        target: '.navbar-default',
//        offset: 80
//    })

$(document).ready(function () {



	window.m_site = {
		currentScreen: ko.observable("Main"),
		scrolled: ko.observable(false),
		serviceTypes: ["website", "app", "CRM", "complex", "enterprise"],
		serviceTypeSelected: ko.observable("website"),
		comboPopupOpen: ko.observable(false),



		sitecheck1: ko.observable(false)
	};
	window.m_site.m_calc = [{

		label: 'Сайт',
		checked: ko.observable(false),
		price_rub: 100,
		children: [
			{
				label: 'концепция',
				checked: ko.observable(false),
				price_rub: 150
					},
			{
				label: 'custom дизайн',
				checked: ko.observable(false),
				price_rub: 110
					},


			]
	}, {

		label: 'Мобильное приложение',
		checked: ko.observable(false),
		price_rub: 100,
		children: [
			{
				label: 'концепция',
				checked: ko.observable(false),
				price_rub: 150
					},
			{
				label: 'custom дизайн',
				checked: ko.observable(false),
				price_rub: 110
					},


			]
	}]



	var page = window.location.hash.replace(/#/g, '') || "Main"
	console.log("PAGE", page)
	goTo(page)

	ko.applyBindings(m_site);

	//
	//			$(".comboSelector").click(function (e, el) {
	//				console.log(e, el)
	//				$("body").addClass("comboSelectorPopup_show")
	//			})
	//			$("#team").owlCarousel({
	//
	//				navigation: false, // Show next and prev buttons
	//				slideSpeed: 300,
	//				paginationSpeed: 400,
	//				autoHeight: true,
	//				itemsCustom: [
	//				        [0, 1],
	//				        [450, 2],
	//				        [600, 2],
	//				        [700, 2],
	//				        [1000, 4],
	//				        [1200, 4],
	//				        [1400, 4],
	//				        [1600, 4]
	//				      ],
	//			});
	//
	//			$("#clients").owlCarousel({
	//
	//				navigation: false, // Show next and prev buttons
	//				slideSpeed: 300,
	//				paginationSpeed: 400,
	//				autoHeight: true,
	//				itemsCustom: [
	//				        [0, 1],
	//				        [450, 2],
	//				        [600, 2],
	//				        [700, 2],
	//				        [1000, 4],
	//				        [1200, 5],
	//				        [1400, 5],
	//				        [1600, 5]
	//				      ],
	//			});
	//
	//			$("#testimonial").owlCarousel({
	//				navigation: false, // Show next and prev buttons
	//				slideSpeed: 300,
	//				paginationSpeed: 400,
	//				singleItem: true
	//			});

});

/*====================================
    Portfolio Isotope Filter
    ======================================*/
//$(window).load(function () {
//	var $container = $('#lightbox');
//	$container.isotope({
//		filter: '*',
//		animationOptions: {
//			duration: 750,
//			easing: 'linear',
//			queue: false
//		}
//	});
//	$('.cat a').click(function () {
//		$('.cat .active').removeClass('active');
//		$(this).addClass('active');
//		var selector = $(this).attr('data-filter');
//		$container.isotope({
//			filter: selector,
//			animationOptions: {
//				duration: 750,
//				easing: 'linear',
//				queue: false
//			}
//		});
//		return false;
//	});
//
//});



/*====================================
    Portfolio Item Open
    ======================================*/
$('#portfoliomodal1').on('shown.bs.modal', function () {
	$('#myInput').focus()
})
$('#portfoliomodal2').on('shown.bs.modal', function () {
	$('#myInput').focus()
})
$('#portfoliomodal3').on('shown.bs.modal', function () {
	$('#myInput').focus()
})
$('#portfoliomodal4').on('shown.bs.modal', function () {
	$('#myInput').focus()
})
$('#portfoliomodal5').on('shown.bs.modal', function () {
	$('#myInput').focus()
})
$('#portfoliomodal6').on('shown.bs.modal', function () {
	$('#myInput').focus()
})
$('#portfoliomodal7').on('shown.bs.modal', function () {
	$('#myInput').focus()
})
$('#portfoliomodal8').on('shown.bs.modal', function () {
	$('#myInput').focus()
})



ko.bindingHandlers.toggleClick = {
	init: function (element, valueAccessor) {
		var value = valueAccessor();

		ko.utils.registerEventHandler(element, "click", function (ev) {
			value(!value());
			console.log("registerEventHandler", ev)
			ev.preventDefault()
			return false

		});
	}
};
ko.bindingHandlers.click.preprocess = function (val) {
	if (val.indexOf('(') !== -1 && val.indexOf('bind(') === -1 && val.indexOf('function') === -1)
		return 'function($data,$event){ ' + val + ' }';
	else
		return val;
}
window.addEventListener("hashchange", function (ev) {
	var pageName = ev.newURL.split("#")[1]
	console.log(ev, pageName)
	goTo(pageName || "Main")
}, false);


var now = new Date().getTime();
$(window).scroll(function () {
	//	if (new Date().getTime() - now > 1000) {
	//		if (window.pageYOffset > 350) {
	//window.pageYOffset > 350?$("body").addClass("scrolled"):$("body").removeClass("scrolled")
	m_site.scrolled(window.pageYOffset > 50)
	console.log("Task executed once per second");
	now = new Date().getTime();

	//		}
	//	}
});

window.goTo = function (scr) {
	//	console.log("GOTO",scr)
	m_site.currentScreen(scr)

	//	$(".modal").modal('hide')

	var $newscr = $(".page." + scr)
	if ($newscr.length == 0) return
	if (!$newscr.hasClass("popup")) {
		$(".page").hide(00, function () {
				$newscr.show(00)
			}) //.removeClass("selected")

	} else {
		$newscr.find(".modal").modal('toggle')
	}
	setTimeout(function () {

		}, 311)
		//.addClass("selected")


}