document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('hero-slider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.hero-slide-img');
  const dots = slider.querySelectorAll('.slider-dot');
  const prev = slider.querySelector('.slider-prev');
  const next = slider.querySelector('.slider-next');
  let current = 0;
  let timer;

  function showSlide(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    
    current = (index + slides.length) % slides.length;
    
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => showSlide(current + 1), 6000); // 6 seconds auto-play
  }

  if (prev) prev.addEventListener('click', () => showSlide(current - 1));
  if (next) next.addEventListener('click', () => showSlide(current + 1));
  
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(e.target.getAttribute('data-index'), 10);
      showSlide(idx);
    });
  });

  resetTimer();
});
