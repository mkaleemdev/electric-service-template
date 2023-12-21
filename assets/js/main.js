
// ===== ====== =====

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $(".menu").css("opacity" , "1");
        $(".smaller").css("background-color" , "rgba(0, 0, 0, 0.9)");
    } else {
        $(".menu").css("opacity" , "0");
        $(".smaller").css("background-color" , "transparent");
    }
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $(".nav").fadeOut();
    } else {
        $(".nav").fadeIn();
    }
});

// ===== mobile menu

$(document).ready(function () {
    $(".mobile-menu").click(function () {
        $(".mobile-menu-ul").slideToggle("slow");
    });
});

//  ====== owl js %%%%

$('.owl-top').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
$(".owl-top .owl-prev").html('<i class="bi bi-arrow-left"></i>');
$(".owl-top .owl-next").html('<i class="bi bi-arrow-right"></i>');

$('.owl-hero').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


$('.owl-client').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


// ==== ===== certificate ===

$(document).ready(function () {
    $(".certif-img").click(function () {
        $(".certificate-img").show();
    });

    $(".certi-big-img p").click(function () {
        $(".certificate-img").hide();
    });

    $(".certif-img").click(function () {
        $(".overlay-certif").show();
    });

    $(".overlay-certif").click(function () {
        $(".overlay-certif").hide();
    });

});
// ==== ===== certificate ===



// === ==== ==== footer more button %%%

$(document).ready(function () {
    $(".more-btn a").click(function () {
      $(".more-bottom").slideToggle("slow");
    });
  });