function mainmenu(){
	$(" #main-nav ul ").css({display: "none"});
	// Main dropdown functions
	$(" #main-nav li").hover(function(){
        $(this).find('ul:first').slideDown('fast', 'easeOutExpo');
        	var elm = $('ul:first', this);
		    var off = elm .offset();
		    var l = off.left;
		    var w = elm.width();
		    var docW = $(".wrap2").width();
		    var isEntirelyVisible = (l+ w <= docW);

		    if ( ! isEntirelyVisible ) {
		        $(this).find('ul').addClass('edge');
		    } else {
		        $(this).removeClass('edge');
		    }
        },function(){
        $(this).find('ul:first').slideUp('fast', 'easeOutExpo');
    });
}

$(document).ready(function() {
		// Start main nav dropdown function
		mainmenu();
		$('ul.main-nav > li').addClass('top_level');
		$('#main-nav ul').addClass('dropdown_1');
		$('.dropdown_1 ul').addClass('dropdown_2').removeClass('dropdown_1');
		$('#main-nav li:has(> ul)').addClass('parent');
		// Save main nav html
		var navHtml = $('#main-nav').html();
		// Populate mobile nav html
		$('#alt-nav').html(navHtml);
		$('#alt-nav .parent').prepend('<div class="indicator"></div>');
		// Toggle mobile nav dropdown indicators
		$('#alt-nav .indicator').not($(this).parent()).click(function(){
			$(this).toggleClass('indicator-up');
		})

		// Set some defaults
		$('#alt-nav-wrap, .wrap2, .sub').transition({ 
    			rotateY: '0deg' // to invoke hardware accel. on iOS6+
    			}, 0);
		$('#alt-nav-wrap').css({ transformOrigin: '0px 0px'});
		$('#alt-nav-wrap').transition({ 
			    scale: [0, 1]
			}, 0, 'ease');

		// Open Mobile Nav
		$('.open').fastClick(function(e) {
			$('#alt-nav-wrap').show();
			$('.wrap2').transition({ 
				x: '250px'
    			}, 900, 'snap');
			$('.overlay-close').show();
			$('#alt-nav-wrap').transition({ 
			    scale: [1, 1]
			}, 900, 'snap')
		});

		//Close Mobile Nav
		$('.close, .overlay-close').fastClick(function(e) {
			$('.wrap2').transition({ x: '0px' }, 900, 'snap');
			$('#alt-nav-wrap').transition({ 
			    scale: [0, 1]
			}, 900, 'snap', function() {
	   			$('.overlay-close').hide();
				$('#alt-nav .dropdown_1, #alt-nav .dropdown_2').hide();
				$('.indicator-up').removeClass('indicator-up');
 			});
		});

		// Mobile Sub Menus
		$(" #alt-nav .indicator").click(function(f){
        $(this).parent().find('ul:first').toggle();
        f.stopPropagation();
        });

	
	});




