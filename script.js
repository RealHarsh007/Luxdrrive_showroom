document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});


// navbar 
(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery



{/* <script> */}
  document.getElementById("typeFilter").addEventListener("change", function () {
    const selectedType = this.value;
    const cards = document.querySelectorAll(".car-card");

    cards.forEach(card => {
      const cardType = card.getAttribute("data-type");
      if (selectedType === "all" || cardType === selectedType) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });



// // swipper for about 
//  const sliderImages = document.querySelectorAll('.slider-img');
//   let current = 0;

//   setInterval(() => {
//     sliderImages[current].style.opacity = 0;
//     current = (current + 1) % sliderImages.length;
//     sliderImages[current].style.opacity = 1;
//   }, 3000);

//   // Swiper for brand logos (left bottom)
//   var brandSwiper = new Swiper(".brandSwiper", {
//     slidesPerView: 3,
//     spaceBetween: 20,
//     loop: true,
//     speed: 800,
//     autoplay: {
//       delay: 1500,
//       disableOnInteraction: false,
//     },
//     slidesPerGroup: 1, // one by one
//   });



  // 

  // Swiper for brand logos
const brandSwiper = new Swiper('.brandSwiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});

// Image Banner Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slider-container .slider-img');

function showSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    slide.style.opacity = 0;
  });

  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
  slides[slideIndex].style.opacity = 1;

  setTimeout(showSlides, 3000); // change every 3 seconds
}
showSlides();


// Image Swiper in About Section
const aboutImageSwiper = new Swiper(".aboutImageSwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true
  }
});
