var swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    effect:'cube',
    speed:1000,
    loop:true,
    autoplay:{
        delay:3000,
    },
    freemode:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });