let adSwiperOption = {
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    },
  };

  let swiperOption = {
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };



  
const state = {
  adSwiperOption,
  swiperOption
};


export default {
    namespaced: true,
    state,
}