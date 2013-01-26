function mainmenu(){
	$(" #main-nav ul ").css({display: "none"});
	// Main dropdown functions
	$(" #main-nav li").hover(function(){
        $(this).find('ul:first').slideDown('fast', 'easeOutExpo');
        },function(){
        $(this).find('ul:first').slideUp('fast', 'easeOutExpo');
    });
}

$(document).ready(function() {
		// Start main nav dropdown function
		mainmenu();
		$('#main-nav li:has(> ul)').addClass('parent');
		// Save main nav html
		var navHtml = $('#main-nav').html();
		// Populate mobile nav html
		$('#alt-nav').html(navHtml);
		// Toggle mobile nav dropdown indicators
		$('#alt-nav .parent').click(function(){
			$(this).toggleClass('parent-up');
		})

		// Set some defaults
		$('#alt-nav-wrap, .wrap2, .sub').transition({ 
    			rotateY: '0deg' // to invoke hardware accel. on iOS6+
    			}, 0);
		$('#alt-nav-wrap').css({ transformOrigin: '0px 0px' });
		$('#alt-nav-wrap').transition({ 
			    scale: '.8',
			    opacity: '0'
			}, 0, 'ease');

		// Open Mobile Nav
		$('.open').fastClick(function(e) {
			$('.wrap2').transition({ 
				x: '250px'
    			}, 500, 'ease');
			$('.overlay-close').show();
			$('#alt-nav-wrap').transition({ 
			    scale: '1',
			    opacity: '1'
			}, 300, 'ease')
		});

		//Close Mobile Nav
		$('.close, .overlay-close').fastClick(function(e) {
			$('.wrap2').transition({ x: '0px' }, 500, 'ease');
			$('#alt-nav-wrap').transition({ 
			    scale: '.8',
			    opacity: '0'
			}, 1000, 'ease');
			$('.overlay-close').hide();
		});

		// Mobile Sub Menus
		$('#alt-nav li').fastClick(function(e) {
			$(this).find('ul:first').toggle();
		});

	
	});




