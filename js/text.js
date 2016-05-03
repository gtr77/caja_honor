$(function(){

	$('ul.menu-bar-side > li > span').on('click', function(){

		var el = $('ul.menu-bar-side > li');
		var show = $('ul.menu-bar-side > li > a');
		if(el.hasClass('bitch')){
			el.removeClass('bitch');
			show.removeClass('show');			
		}
		else{
			el.addClass('bitch');
			show.addClass('show');			
		}
	});


});