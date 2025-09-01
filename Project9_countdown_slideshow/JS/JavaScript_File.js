function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if( seconds == -1) {
            alert("Time's up");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
};
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
      dots[i].classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  function startAutoPlay() {
    slideInterval = setInterval(nextSlide, 4000); // 4 seconds
  }

  function stopAutoPlay() {
    clearInterval(slideInterval);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      stopAutoPlay();
      showSlide(Number(dot.dataset.index));
      startAutoPlay();
    });
  });

  showSlide(currentIndex);
  startAutoPlay();
});
