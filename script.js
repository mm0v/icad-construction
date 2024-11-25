// Start Swiper
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const counter = document.querySelector(".counter");

let currentSlide = 0;

function updateSlide() {
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentSlide);
  });
  counter.textContent = `${currentSlide + 1} / ${slides.length}`;
}

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
});

// Initialize
updateSlide();

// End Swiper

// Start Modal
function toggleSidebar() {
  const sidebar = document.getElementById("leftSidebar");
  const barsIcon = document.querySelector(".fa-bars");
  const xmarkIcon = document.querySelector(".fa-xmark");

  // Toggle Sidebar Visibility
  sidebar.classList.toggle("active");

  // Switch Icons Based on Sidebar State
  if (sidebar.classList.contains("active")) {
    barsIcon.style.display = "none"; // Hide bars icon
    xmarkIcon.style.display = "block"; // Show xmark icon
  } else {
    barsIcon.style.display = "block"; // Show bars icon
    xmarkIcon.style.display = "none"; // Hide xmark icon
  }
}

// End Modal
