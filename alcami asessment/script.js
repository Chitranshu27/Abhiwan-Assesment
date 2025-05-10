function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}



// Toggle search input
function toggleSearch() {
  const searchContainer = document.querySelector(".search-container");
  searchContainer.classList.toggle("active");
}

function changeImage(thumbnail) {
  const mainImage = document.getElementById('mainImage');
  mainImage.src = thumbnail.src;
}

const video = document.getElementById('ritualVideo');
const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', () => {
  video.play();
  playBtn.style.display = 'none';
});

video.addEventListener('pause', () => {
  playBtn.style.display = 'flex';
});

video.addEventListener('ended', () => {
  playBtn.style.display = 'flex';
});
// founder video //
//const playBtnn = document.getElementById('playBtnn');
//const founderVideo = document.getElementById('founderVideo');

//playBtnn.addEventListener('click', () => {
//founderVideo.play().then(() => {
//playBtnn.style.display = 'none';
//}).catch(error => {
//console.log("Video playback failed:", error);
//});
//});

window.addEventListener('DOMContentLoaded', function () {
  const playBt = document.getElementById('playBt');
  const founderVideo = document.getElementById('founderVideo');

  if (playBt && founderVideo) {
    playBt.addEventListener('click', () => {
      founderVideo.play()
        .then(() => {
          playBt.style.display = 'none';
        })
        .catch(err => {
          console.error('Video play failed:', err);
          alert('Video play failed. Check the console.');
        });
    });
  } else {
    console.error('Element(s) not found: playBt or founderVideo');
  }
});

//end///

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.nav.right');
const prevButton = document.querySelector('.nav.left');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

function getVisibleSlides() {
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 3;
}

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;

  dots.forEach(dot => dot.classList.remove('active'));
  const dotIndex = Math.floor(currentSlide / getVisibleSlides());
  if (dots[dotIndex]) dots[dotIndex].classList.add('active');
}

function goToNextSlide() {
  const visible = getVisibleSlides();
  const maxIndex = slides.length - visible;
  currentSlide = currentSlide + visible > maxIndex ? 0 : currentSlide + visible;
  updateCarousel();
}

function goToPrevSlide() {
  const visible = getVisibleSlides();
  currentSlide = currentSlide - visible < 0 ? slides.length - visible : currentSlide - visible;
  updateCarousel();
}

nextButton.addEventListener('click', goToNextSlide);
prevButton.addEventListener('click', goToPrevSlide);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index * getVisibleSlides();
    updateCarousel();
  });
});

window.addEventListener('resize', updateCarousel);

updateCarousel();


document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('active');
  });
});


function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("open");
}

// Add click toggle for dropdown in mobile view
document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // prevent navigation
      this.parentElement.classList.toggle('active');
    }
  });
});
