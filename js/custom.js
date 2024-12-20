// JavaScript Document
// Get the button
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    }
  }

  // Set dark mode as default on page load
  window.addEventListener('DOMContentLoaded', (event) => {
    document.body.classList.add('dark-theme'); // This will apply dark mode by default
  });
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when user scrolls down 20px
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
scrollToTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");

    // Change the button icon/text based on the theme
    const themeIcon = document.getElementById("theme-toggle");
    if (document.body.classList.contains("dark-theme")) {
        themeIcon.textContent = "🌞";  // Sun emoji for light mode
    } else {
        themeIcon.textContent = "🌙";  // Moon emoji for dark mode
    }
});

// JavaScript to add .scrolled class on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.bg-nav');
    if (window.scrollY > 50) {  // Adjust scroll position threshold if needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    //animatedModal
    // $("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08,#demo09").animatedModal();
    // $("#demo01").animatedModal1();
    
    // Contact Form 	

    // validate contact form
    $(function () {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                phone: {
                    required: false
                },
                message: {
                    required: true
                }

            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "This field is required"
                },
                message: {
                    required: "This field is required"
                }
            },
        });

    });
});


// Contact Form

// submitHandler: function (form) {
//     $(form).ajaxSubmit({
//         type: "POST",
//         data: $(form).serialize(),
//         url: "process.php",
//         success: function () {
//             $('#contact :input').attr('disabled', 'disabled');
//             $('#contact').fadeTo("slow", 1, function () {
//                 $(this).find(':input').attr('disabled', 'disabled');
//                 $(this).find('label').css('cursor', 'default');
//                 $('#success').fadeIn();
//             });
//         },
//         error: function () {
//             $('#contact').fadeTo("slow", 1, function () {
//                 $('#error').fadeIn();
//             });
//         }
//     });
// }