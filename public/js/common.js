$(function() {

	$('.content__trigger, .header__sider').on('click', function(){
		$('body').toggleClass('page_open');
	});

	$('.quiz__var').on('click', function(){
		$(this).addClass('quiz__var_open');
	});

});


// SLIDERS
$(function() {

	$('.carousel').carousel({
		interval: false
	})

});
