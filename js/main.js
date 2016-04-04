$(function(){

	/* Menu Principal Hover */

	$('header nav li a').on('mouseover', function(){

		$(this).parent('li').siblings().find('a').removeClass('active');
		$(this).addClass('active');

	});
	$('header nav li a').on('mouseleave', function(){

		$(this).removeClass('active');

	});


	/* Submenu Categorias*/

	$('ul.submenu_left li a').click(function(){

		$(this).closest('li').siblings().find('a').removeClass('active');
		$(this).addClass('active');

	});

	$('section.home-bg nav span').click(function(){
		var navId = $(this).attr('data-id');
		$('#'+navId).animate({
			'padding': '14px 15px',
    		'width': '170px'
		},500);
		$('#'+navId).siblings('li').animate({
			'padding': '14px 0',
    		'width': '0'
		},100);
		$('#'+navId).children('a').css({
			'opacity':'1'
		}).parent('li').siblings().find('a').css({
			'opacity':'0'
		});
	        // $('#'+navId).addClass('active').siblings('li').removeClass('active');
	});

	// $('section.home-bg nav span').click(function(){
	// 	var navId = $(this).attr('data-id');
	// 	if($('#'+navId).hasClass('active')){
	//         $('#'+navId).removeClass('active');
	//     }
	//     else{
	//         $('#'+navId).addClass('active').siblings('li').removeClass('active');
	//     }

	// });

});
