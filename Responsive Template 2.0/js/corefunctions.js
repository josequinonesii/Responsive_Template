$(document).ready(function() {
	$("body").removeClass("preload");
		// Main dropdown functions
	$(" .main-nav li").hover(function(){
        $(this).find('ul:first').slideDown('fast', 'easeOutExpo');
        	var elm = $('ul:first', this);
		    var off = elm .offset();
		    var l = off.left;
		    var w = elm.width();
		    var docW = $(".main-nav").width();
		    var isEntirelyVisible = (l+ w <= docW);

		    if ( ! isEntirelyVisible ) {
		        $(this).find('ul').addClass('edge');
		    } else {
		        $(this).removeClass('edge');
		    }
		    $(this).find('a:first').addClass('active');
        },function(){
        $(this).find('ul:first').slideUp('fast', 'easeOutExpo');
        $(this).find('a:first').removeClass('active');
    });
	// Find parents & add class
	$('.main-nav li:has(> ul)').find(">:first-child").addClass('parent');
	// Save main nav html
	var navHtml = $('.main-nav').html();
	// Populate mobile nav html
	$('.mobile-nav').html(navHtml);
	$('.mobile-nav .parent').parent().append('<div class="indicator"><i class="icon-chevron-down"></i></div>');
	// Mobile Indicators
	$('.mobile-nav .indicator').live("click", function() {
		event.preventDefault();
		$(this).addClass('indicator-active').removeClass('indicator');
		$(this).html('<i class="icon-chevron-up"></i>');
	    $(this).parent().find('ul:first').slideToggle('fast', function() {
	    	var sideHeight = $('.mobile-nav').height();
	    	var viewportHeight = $(window).height();
	    	if (sideHeight > viewportHeight) {
	    	$('.overlay, .mobile-nav-wrap').css('height', sideHeight);
	    	}
	    	else {
	    		// do nothing
	    	}
	    });
	});

	$('.mobile-nav .indicator-active').live("click", function() {
		event.preventDefault();
		$(this).addClass('indicator').removeClass('indicator-active');
		$(this).html('<i class="icon-chevron-down"></i>');
	    $(this).parent().find('ul:first').slideToggle('fast', function() {
	    	var sideHeight = $('.mobile-nav').height();
	    	var viewportHeight = $(window).height();
	    	if (sideHeight > viewportHeight) {
	    	$('.overlay, .mobile-nav-wrap').css('height', sideHeight);
	    	}
	    	else {
	    		$('.overlay, .mobile-nav-wrap').css('height', '100%');
	    	}
	    });
	});


});
