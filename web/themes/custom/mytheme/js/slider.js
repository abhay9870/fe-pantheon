(($, Drupal) => {
  "use strict";
  Drupal.behaviors.Slider = {
    attach() {
      /* add placeholder in serach box */
      jQuery("#edit-keys").attr("placeholder", "KEYWORD");

      /* Start Home Page Banner Section */
      var banner = ".view-carousel-slider .view-content ";
      jQuery(banner).owlCarousel({
        loop: true,
        autoplay: false,
        dots: true,
        items: 1,
      });
      jQuery(banner).addClass("owl-carousel");
      var testimonial = ".view-testimonial-carousel .view-content ";
      jQuery(testimonial).owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        items: 1,
      });
      jQuery(testimonial).addClass("owl-carousel");
      /* End Home Page Banner Section */

      /* Start News & Events Section */
      var blogs = ".blogs-section .view-news-and-events .view-content ";
      jQuery(blogs).owlCarousel({
        loop: false,
        nav: true,
        navText: [
          "<div class='owl-prev'>prev</div>",
          "<div class='owl-next'>next</div>",
        ],
        dots: false,
        margin: 30,
        items: 3,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          768: {
            items: 2,
            nav: true,
          },
          1024: {
            items: 3,
            nav: true,
          },
        },
      });
      jQuery(blogs).addClass("owl-carousel");
      /* End News & Events Section */

      /* Start Footer Logo Auto Carousel */
      var logocarousel = ".view-logo-slider .view-content ";
      jQuery(logocarousel).owlCarousel({
        loop: true,
        center: true,
        dots: false,
        margin: 30,
        items: 7,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          320: {
            items: 2,
          },
          480: {
            items: 3,
          },
          768: {
            items: 5,
          },
          1024: {
            items: 7,
          },
        },
      });
      jQuery(logocarousel).addClass("owl-carousel");
      /* End Footer Logo Auto Carousel */
    },
  };
})(jQuery, Drupal);
