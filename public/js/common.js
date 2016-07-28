$(function() {
	//var $body   = $(document.body);
	//var navHeight = $('.navbar').outerHeight(true);
	//
	//$body.scrollspy({
	//	target: '#leftCol',
	//	offset: navHeight
	//});
	//

	$('.content__trigger, .header__sider').on('click', function(){
		$('body').toggleClass('page_open');
	});

});

