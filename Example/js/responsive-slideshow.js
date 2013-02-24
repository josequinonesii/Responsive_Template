$(document).ready(function() {

	$('.slide:first').find('img').clone().prependTo('.responsive-show').addClass('setter');
	$('.slide-caption').wrapInner('<div class="slide-caption-text">');
	$('.responsive-show').wrapInner('<div class="slide-stage">').append('<a href="#" id="slide-left">‹</a><a href="#" id="slide-right">›</a>');
	var transitionTime = 600
	var easingNext = 'easeOutExpo'
	var easingPrev = 'easeOutExpo'

	$('#slide-right').click(function(e){
		$('.slide:last').fadeOut('slow', function() {
			$('.slide:last').prependTo('.responsive-show').show();
			
		});
		e.preventDefault();
	});

	$('#slide-left').click(function(e){
		$('.slide:first').hide().appendTo('.responsive-show');
		$('.slide:last').fadeIn();
		e.preventDefault();
	});

});