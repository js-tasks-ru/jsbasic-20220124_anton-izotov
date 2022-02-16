function initCarousel() {
  const liner = document.querySelector(".carousel__inner");
  const nextBtn = document.querySelector(".carousel__arrow_right");
  const prevBtn = document.querySelector(".carousel__arrow_left");
  let position = 0;
  const list = document.querySelectorAll(".carousel__slide");
  prevBtn.style.display = "none";
  for (const item of list) {
    const width = item.offsetWidth;
    nextBtn.onclick = function () {
      position += width;
      liner.style.transform = `translateX(-${position}px)`;
      if (position > width * 2) {
        nextBtn.style.display = "none";
      }
      if (position > 0) {
        prevBtn.style.display = "";
      }
    };
    prevBtn.onclick = function () {
      position -= width;
      liner.style.transform = `translateX(${-position}px)`;
      if (position <= width * 2) {
        nextBtn.style.display = "";
      }
      if (position <= 0) {
        prevBtn.style.display = "none";
      }
    };
  }
}
