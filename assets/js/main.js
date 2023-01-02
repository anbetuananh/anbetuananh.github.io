/********************
 *Nguyen Tuan Anh
 *#anbeResume
 ********************/

!(function($) {
    "use strict";

    // Hero typed
    if ($('.typed').length) {
        var typed_strings = $(".typed").data('typed-items');
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 80,
            backSpeed: 10,
            backDelay: 80
        });
    }

    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .scrollto', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            e.preventDefault();
            var target = $(this.hash);
            if (target.length) {

                var scrollto = target.offset().top;

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                }
                return false;
            }
        }
    });

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function() {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, .mobile-nav');

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop() + 200;

        nav_sections.each(function() {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                    main_nav.find('li').removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
            }
            if (cur_pos < 200) {
                $(".nav-menu ul:first li:first").addClass('active');
            }
        });
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // Toggle footer
    $(document).ready(function() {
        $(".bg-change").click(function() {
            var element = document.getElementById("footer-bg1");
            element.classList.toggle("footer-bg2");
        });
    });

    // Toggle switch
    $(document).ready(function() {
        var input = document.getElementById("toggleswitch");
        var x = document.getElementById("header");
        var y = document.getElementById("footer");
        input.addEventListener('change', function() {
            if (this.checked) {
                x.style.background = "#fff";
                y.style.background = "#fff";
            } else {
                x.style.background = "#040b14";
                y.style.background = "#040b14";
            }
        });
    });

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 300
    });

    // AOS
    function aos_init() {
        AOS.init({
            duration: 300,
            easing: "ease-in-out-back",
            once: true
        });
    }
    $(window).on('load', function() {
        aos_init();
    });

    // Tooltip
    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    // Popover
    $(document).ready(function() {
        $('[data-toggle="popover"]').popover();
    });

    // Toast
    $(document).ready(function() {
        $('#myBtn').click(function() {
            $('.toast').toast({ delay: 2000 });
            $('.toast').toast('show');
        });
    });

    //Carousel
    $(document).ready(function() {
        // Activate Carousel
        $("#myCarousel").carousel({ interval: 2000, pause: "hover", keyboard: true });

        // Enable Carousel Indicators
        $(".item1").click(function() {
            $("#myCarousel").carousel(0);
        });
        $(".item2").click(function() {
            $("#myCarousel").carousel(1);
        });
        $(".item3").click(function() {
            $("#myCarousel").carousel(2);
        });
        $(".item4").click(function() {
            $("#myCarousel").carousel(3);
        });
        $(".item5").click(function() {
            $("#myCarousel").carousel(4);

        });

        // Enable Carousel Controls
        $(".carousel-control-prev").click(function() {
            $("#myCarousel").carousel("prev");
        });
        $(".carousel-control-next").click(function() {
            $("#myCarousel").carousel("next");
        });
    });

})(jQuery);