$(document).ready(function() {
    // Hover Main Nav
    $(".main-nav li").hover(
        // Reposition if off screen
        function() {
            if ($(this).find('> ul').length) {
                $(this).find('> .nav-reposition').removeClass();
                $(this).addClass('nav-parent');
                $(this).find('> ul').slideDown(150);

                var absoluteLeft = $(this).find('> ul').offset().left;
                var absoluteRight = absoluteLeft + $(this).find('> ul').outerWidth();
                var viewportRight = $(window).width() + $(window).scrollLeft();

                if (absoluteRight > viewportRight) {
                    $(this).find('> ul').addClass('nav-reposition');
                } else {
                    $(this).find('> ul').removeClass('nav-reposition');
                }
            }
        }, function() {
            $(this).removeClass('nav-parent');
            $(this).find('> ul').stop().slideUp(150, function() {
                $(this).attr("style", "overflow:visible");
            });
        });
    // Save main nav html
    var navHtml = $('.main-nav ul').html();
    // Append down-arrows for parents
    $('.main-nav li:has(> ul)').find(">:first-child").append(' <span class="arrow">▼</span>');
    // Populate mobile nav html
    $('body').append('<a href="#" id="overlay-mobile"></a><div id="mobile"><nav class="mobile-nav-wrap"><ul class="mobile-nav">' + navHtml + '</ul></nav></div><div id="mobile-btn-wrap"><a href="#" id="mobile-btn-active"><i class="fa fa-times"></i></a><a href="#" id="mobile-btn-inactive"><i class="fa fa-bars"></i></a></div>');
    $('.mobile-nav li:has(> ul)').find(">:first-child").parent().append('<div class="indicator"><i class="fa fa-chevron-down"></i></div>');

    // Function to make sure overlay covers the page
    function overlayFixer() {

        var overlayHeight = $('#overlay-mobile').height(),
            viewportHeight = $(document).height();
        if (viewportHeight > overlayHeight) {

            $('#overlay-mobile').css('height', viewportHeight);
        }
    }

    // Mobile opener & closer
    $(document.body).on('click', '#mobile-btn-wrap, #overlay-mobile', function(event) {
        var isClosed = parseInt($('#overlay-mobile').css('left'));
        if (isClosed == 0) {
            $('#mobile').css({
                'transform': 'translate(0px,0px)'
            });
            $('#mobile-btn-wrap').css({
                'transform': 'rotate(0deg)'
            });
            $('#overlay-mobile').css({
                'opacity': '0'
            });
            setTimeout( function(){
              $('#overlay-mobile').css({
                'left': '-100%'
            });
            },500);
        } else {
            $('#mobile').css({
                'transform': 'translate(255px,0px)'
            });
            $('#mobile-btn-wrap').css({
                'transform': 'rotate(-90deg)'
            });
            $('#overlay-mobile').css({
                'left': '0%',
                'opacity': '1'
            });
        }
        event.preventDefault();
    });

    // Open First Level Mobile Menues
    $(document).on('click', '.mobile-nav > li > .indicator', function(event) {
        $('.mobile-nav ul').not($(this).parent().find('ul:first')).slideUp();
        $(this).addClass('indicator-active').removeClass('indicator');
        $(this).parent().find('ul:first').slideDown(function() {
            overlayFixer();
        });
        $('.indicator-active').not(this).removeClass('indicator-active').addClass('indicator');
        event.preventDefault();
    });

    // Open Sub Level Mobile Menues
    $(document).on('click', '.mobile-nav > li > ul .indicator', function(event) {
        $(this).addClass('indicator-active').removeClass('indicator');
        $(this).parent().find('ul:first').slideDown(function() {
            overlayFixer();
        });
        event.preventDefault();
    });

    // Close Menues
    $(document).on('click', '.mobile-nav .indicator-active', function(event) {
        $(this).addClass('indicator').removeClass('indicator-active');
        $(this).parent().find('ul:first').slideUp();
        event.preventDefault();
    });

});