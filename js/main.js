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

	/*
		веб-сайт
	 концепция (проектирование интерфейса, разделение функционала по страницам) +=150000
	 красивый дизайн + верстка += 150000
	 очуменный дизайн +=150000
	 удобная админка +=100000
	 прием платежей (visa/mastercard etc) +=100000
	 интеграция с по клиента (1с/базы данных/другие api) +=100000
	 высокая нагрузка (более ??? посетителей в сутки/одновременных) +=100000

	мобильное приложение
	 концепция (проектирование интерфейса, разделение функционала по страницам) +=150000
	 платформа android +=120000
	 платформа ios +=180000
	 очуменный дизайн +=100000
	 фоновая геолокация +=150000
	 push-уведомления +=100000
	 */



	var page = window.location.hash.replace(/#/g, '') || "Main"
	console.log("PAGE", page)
	goTo(page)

	ko.applyBindings(m_site);
	m_site.approximatePrice()
});
window.m_site = {
	currentScreen: ko.observable("Main"),
	scrolled: ko.observable(false),
	serviceTypes: ["website", "app", "CRM", "complex", "enterprise"],
	serviceTypeSelected: ko.observable("website"),
	comboPopupOpen: ko.observable(false),
	approximatePrice_rub: ko.observable(0),



	sitecheck1: ko.observable(false)
};
window.m_site.m_calc = [{

	label: 'Сайт',
	checked:  ko.observable(false),
	//	checked: ko.observable(false),
	price_rub: 100,
	children: [
		{
			label: 'Проектирование',
			checked: true,
			price_rub: 00
},


		{
			label: 'дизайн',
			checked: true,
			price_rub: 0,
			radio: true,
			children: [
				{
					label: 'у меня уже есть',
					checked: ko.observable(false),
					price_rub: 0
}, {
					label: 'стоковый',
					checked: ko.observable(true),
					price_rub: 50,
}, {
					label: 'модный',
					checked: ko.observable(false),
					price_rub: 50
},
]
}, {
			label: 'админка',
			checked: ko.observable(false),
			price_rub: 0,
			radio: true,
			children: [
				{
					label: 'не нужно',
					checked: ko.observable(false),
					price_rub: 0
}, {
					label: 'простая',
					checked: ko.observable(true),
					price_rub: 50,
}, {
					label: 'крутая',
					checked: ko.observable(false),
					price_rub: 150
}, {
					label: 'весь сайт и есть админка',
					checked: ko.observable(false),
					price_rub: 300
},
]
}, {
			label: 'уникальных страниц/экранов интерфейса',
			checked: true,
			price_rub: 0,
			radio: true,
			children: [
				{
					label: '1-3',
					checked: ko.observable(false),
					price_rub: 0
}, {
					label: '3-10',
					checked: ko.observable(true),
					price_rub: 50,
}, {
					label: '10-20',
					checked: ko.observable(false),
					price_rub: 150
}, {
					label: '20+',
					checked: ko.observable(false),
					price_rub: 300
},
]
}, {
			label: 'роли пользователей',
			checked: ko.observable(false),
			price_rub: 100
}, {
			label: 'личные кабинеты',
			checked: ko.observable(false),
			price_rub: 100
}, {
			label: 'регистрация пользователей',
			checked: ko.observable(false),
			price_rub: 100
}, {
			label: 'социальные сети (авторизация, забор данных)',
			checked: ko.observable(false),
			price_rub: 100
}, {
			label: 'прием платежей (visa/mastercard etc)',
			checked: ko.observable(false),
			price_rub: 100
},
		{
			label: ' интеграция с по клиента (1с/базы данных/другие api)',
			checked: ko.observable(false),
			price_rub: 150
}, {
			label: 'импорт данных (переезд)',
			checked: ko.observable(false),
			price_rub: 150
},
		{
			label: 'высокая нагрузка',
			checked: ko.observable(false),
			price_rub: 400
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

m_site.approximatePrice = function (elms) {

	//	window.m_site.m_calc[0].children.forEach(function (el) {
	//		console.log(el.price_rub, el.checked)
	//		if (el.price_rub && typeof (el.checked) == "function" && el.checked()) sum += el.price_rub
	//	})
	var sum = iteratePriceItems(window.m_site.m_calc)
	console.log("sum", sum)

	sum = Math.floor(sum / 100) * 100
	var sumret = Math.floor(sum * .7 / 100) * 100 + " - " + Math.floor(sum * 1.3 / 100) * 100

	m_site.approximatePrice_rub(sumret)
	return sum
}

function iteratePriceItems(itms) {
	//	console.log("itms",itms)
	var mysum = 0
	itms.forEach(function (el) {

		if (
			(typeof (el.checked) == "function" && el.checked()) ||
			el.checked === true
		) {
			if (el.price_rub != undefined) mysum += el.price_rub
			console.log("CHECK", el.label, el.price_rub)
			if (el.children) mysum += iteratePriceItems(el.children)
		}

	})
	return mysum

}
m_site.resetCheck = function (elms) {
	//	console.log(elms)
	elms.forEach(function (el) {
		//		console.log(el)
		el.checked(false)
	})
	setTimeout(m_site.approximatePrice, 100)
}

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
			if ((typeof value) == 'function') value(!value());
			//			console.log("registerEventHandler", ev)
			m_site.approximatePrice()
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