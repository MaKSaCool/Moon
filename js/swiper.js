var headerSwiper = new Swiper('.header-swiper-container', {
    // loop: true,
    direction: 'vertical',
    spaceBetween: 30,
    effect: "fade",
    mousewheel: true,
    pagination: {
      el: '.header-swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
});