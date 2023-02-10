var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiperBig = new Swiper(".mySwiper-2", {
    slidesPerView: 4,
    spaceBetween: 17,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiperTree = new Swiper(".mySwiper-3", {
    slidesPerView: 1,
    spaceBetween: 17,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const slider = document.querySelector('.slider');
const mySwiperTwo = document.querySelector('.mySwiper-2');

window.addEventListener('resize', function () {
    if (window.innerWidth <= 1500) {
        // 0...768
        slider.classList.add('mySwiper-3');
        slider.classList.remove('mySwiper-2');
    } else {
        // 769...Inf
        slider.classList.remove('mySwiper-3');
        slider.classList.add('mySwiper-2');
    }
});

  const counter = function () {
    const btns = document.querySelectorAll('.counter__btn');
  
  
    btns.forEach(btn => {
      btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter__value');
        const currentValue = +inp.value;
        let newValue;
  
        if (direction === 'plus') {
          newValue = currentValue + 1;
        } else {
          newValue = currentValue - 1 > 1 ? currentValue - 1 : 1;
        }
  
        inp.value = newValue;
      })
    })
  
  }
  
  counter();

