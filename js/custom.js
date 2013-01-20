$(document).ready(function() {

		var navHtml = $('#main-nav').html();


		$('#alt-nav').html(navHtml);

		$('.has-menu').parent().find('ul').slideUp();

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
		$('.has-menu').fastClick(function(e) {
			event.preventDefault();
			$(this).parent().find('ul').toggle();
		});

		// Main Drop Downs
		    $('#main-nav li').hover(
        function () {
            //show submenu
            $('ul', this).slideDown(100);
 
        }, 
        function () {
            //hide submenu
            $('ul', this).slideUp(100);         
        });
	});