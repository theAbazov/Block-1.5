let swiper = new Swiper(window.innerWidth < 768 ? ".mySwiper" : '', {
  slidesPerView: "auto",
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const more = document.getElementById('more')
const swiperWrapper = document.getElementById('swiper-wrapper')


more.addEventListener('click', () => {
  swiperWrapper.classList.toggle('swiper-show')
})
