// how to use JQuery
//$(selector).action();

// Preloader
$(window).on('load',function(){  //makesure all content is loaded well
    $('#status').fadeOut();
    $('#preloader').delay(600).fadeOut();
});

// Team
$(function(){
    $("#team-members").owlCarousel({
        items:2,
        autoplay : true,
        smartspeed : 400,
        loop : true,
        autoplayHoverPause:true,
        nav : true,
        dots : false,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
        
    });
});

// progress bars
$(function(){
    $(".progress-bar").each(function(){
        $(this).animate({
            width:$(this).attr("aria-valuenow") +"%"
        },500);
    });
});
// Responsive Tabs
$(function(){
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});
// Portfolio
$(window).on('load',function(){
    // Initialize Isotope
    $("#isotope-container").isotope({
        // options
    });
    // filter items on button click
    $("#isotope-filters").on('click','button',function(){
        // Get Filter Value
        var filterValue = $(this).attr('data-filter');
        // Filter portfolio
        $("#isotope-container").isotope({
            filter : filterValue
        });
        // Active Button
        $("#isotope-filters").find('active').removeClass('active');
        $(this).addClass('active');
    })
});
// Magnifier PopUp
$(function(){
    $("#portfolio-wrapper").magnificPopup({
        delegate :'a',
        type :'image',
        gallery:{
            enabled :true
        }
    });
});
// Testimonial Section
$(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        autoplay : false,
        smartspeed : 400,
        loop : true,
        autoplayHoverPause:true,
        nav : true,
        dots : false,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
});
// Stats Section
$(function(){
    $(".counter").counterUp({
        delay :10,
        time : 2000
    });
});
// Clients
$(function(){
    $("#clients-list").owlCarousel({
        items:6,
        autoplay : false,
        smartspeed : 400,
        loop : true,
        autoplayHoverPause:true,
        nav : true,
        dots : false,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
});
// Scroll Nav-bar
$(function(){
    showHideNav();
    $(window).scroll(function(){
        showHideNav();
    });
    function showHideNav(){
        if($(window).scrollTop()>50){
            // Show White Nav
            $("nav").addClass("white-nav-top");
            $(".navbar-brand img").attr("src","img/logo/logo-dark.png");
        }else{
            // Hide White Nav
            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src","img/logo/logo.png");
        }
    }
});

// Smooth scrolling function
$(function(){
    $("a.smooth-scroll").click(function(event){
        // Get ID SECTION
        var section_id = $(this).attr("href");
        $("html,body").animate({
            scrollTop:$(section_id).offset().top
        },1250);
    });
});

// Mobile Menu
$(function(){
    $("#mobile-nav-open-btn").click(function(){
        $("#mobile-nav").css("height","100%");
    });
    $("#mobile-nav-close-btn").click(function(){
        $("#mobile-nav").css("height","0%");
    });
});

// Animation
$(function(){
    new WOW().init();
});

$(window).on('load',function(){
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});



