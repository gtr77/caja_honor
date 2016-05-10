$(function(){

	var elem1 = $('#one'),
		elem2 = $('#two'),
		elem3 = $('#three');


	function girarPlanetas(){

		$('.worlds').on('click', function(){

			var tagId = $(this).attr('id');
			$('#'+tagId).addClass('animate').siblings('.worlds').removeClass('animate');
			// $('.pequenos_heroes').fadeToggle();
			if(tagId === "one"){
				$(this).animate({
				   'left':'30%'
				},1200);
				elem2.animate({
				   'left':'61.5%'
				},1200);
				elem3.animate({
				   'left':'0%'
				},1200);	
			}
			else if(tagId === "three"){
				$(this).animate({
				   'left':'30%'
				},1200);
				elem1.animate({
				   'left':'61.5%'
				},1200);
				elem2.animate({
				   'left':'0%'
				},1200);	
			}
			else{
				$(this).animate({
				   'left':'30%'
				},1200);
				elem3.animate({
				   'left':'61.5%'
				},1200);
				elem1.animate({
				   'left':'0%'
				},1200);				
			}

		});

	}
	girarPlanetas();

	/* Menu Principal Hover */

	$('header nav li a').on('mouseover', function(){

		$(this).parent('li').siblings().find('a').removeClass('active');
		$(this).addClass('active');

	});
	$('header nav li a').on('mouseleave', function(){

		$(this).removeClass('active');

	});

	/* Submenu Categorias*/
	$('ul.submenu_left li a').on('mouseover',function(){

		$(this).closest('li').siblings().find('a').removeClass('active');
		$(this).addClass('active');
		var showPanel = $(this).attr('data-id');
		$('#'+showPanel).siblings('.tabs_content').removeClass('active');
		$('#'+showPanel).addClass('active');


	});

	$('section.home-bg nav span').on('click',function(){
		var navId = $(this).attr('data-id');
		$('#'+navId).animate({
			'padding': '14px 15px',
    		'width': '140px',
    		'opacity': '1'
		},600);
		$('#'+navId).siblings('li').animate({
			'padding': '14px 0',
    		'width': '0',
    		'opacity': '0'
		},100);
		$('#'+navId).children('a').css({
			'opacity':'1'
		}).parent('li').siblings().find('a').css({
			'opacity':'0'
		});
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

	$('.go_back').on('click', function(){

		$(this).parents().find('section.home-bg nav').fadeToggle();

	});



});
