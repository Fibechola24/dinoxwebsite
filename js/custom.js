
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".navbar").addClass("sticky-nav");
        } else {
            $(".navbar").removeClass("sticky-nav");
        }
    });

    // BACKSTRETCH SLIDESHOW
    $('#section_1').backstretch([
      "images/slide/LOGISTICS INSURANCE CLEARING AND FORWARDING.jpg", 
      "images/slide/MINI-GRID PROJECTS.jpg",
      "images/slide/POWER PROJECT ELV_LV_MV_HV.jpg",
      "images/slide/RENEWABLE ENERGY PROJECTS.jpg",
      "images/slide/caterpillar.jpg"

      


    ],  {duration: 2000, fade: 750});
    
  })(window.jQuery);


