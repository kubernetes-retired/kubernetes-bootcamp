$(function() {
	//var $body   = $(document.body);
	//var navHeight = $('.navbar').outerHeight(true);
	//
	//$body.scrollspy({
	//	target: '#leftCol',
	//	offset: navHeight
	//});
	//

	$('.content__trigger').on('click', function(){
		$('body').toggleClass('page_open');
	});
});

