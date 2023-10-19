const swiper = new Swiper('.swiper', {
  
  slidesPerView: 1,
  spaceBetween: 50,
// Optional parameters

    // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
},

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },


  breakpoints: {
        480: {
            slidesPerView: 2,
            // spaceBetween: 20
        },
        828: {
            slidesPerView: 3,
            // spaceBetween: 20
        },
        992: {
            slidesPerView: 4,
            // spaceBetween: 30
        },
        1320: {
            slidesPerView: 4,
            // spaceBetween: 40
        }
    },

});


let headerMenu = document.querySelector(".header__menu");
let headerMenuLine = document.querySelector(".header__menu-line");
let headerBurger = document.querySelector(".header__burger");

headerMenu.addEventListener("click", function () {
  headerMenuLine.classList.toggle("active");
  headerBurger.classList.toggle("active");
});

let headerContentTitle = document.querySelector(".header__content-title");
let fullText = headerContentTitle.innerHTML;
let stop = 0;

headerContentTitle.innerHTML = "";

function runText(x = 0) {
  headerContentTitle.innerHTML += fullText[x];
  x++;

  stop = setTimeout(() => {
    runText(x);
  }, 200);

  if (x == 18) {
    clearTimeout(stop);
    headerContentTitle.classList.add("active");
  }
}

runText();

let manfiveBoxs = document.querySelector(".manfive__boxs");
let manfourBoxs = document.querySelector(".manfour__boxs");

window.addEventListener("scroll", () => {
  fadeRight(manfiveBoxs, 2);
  fadeRight(manfourBoxs, 2);
//   fadeRight(manfourBoxs, 2);
});

function fadeRight(section, coordinate) {
  let fadeRight = section.querySelectorAll(".fade-right");
  console.log(section.offsetTop - section.offsetHeight);
//   console.log(section.offsetHeight);
//   console.log(section.offsetTop / coordinate);

  for (let i = 0; i < fadeRight.length; i++) {
    const speed = fadeRight[i].getAttribute("data-speed");

    fadeRight[i].style.transition = speed + "ms";


    if (this.scrollY >= section.offsetTop - section.offsetHeight) {
      fadeRight[i].classList.add("active");
    } else {
      fadeRight[i].classList.remove("active");
    }
  }
}