import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = createElement(` <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
  
      <div class="carousel__inner">
  
      </div>
    </div>  
  `);
    this.render();
    this.initCarousel();
  }

  render() {
    let card = this.elem.querySelector(".carousel__inner");
    for (const product of this.slides) {
      card.insertAdjacentHTML(
        "beforeEnd",
        `
          <div class="carousel__slide" data-id="${product.id}">
          <img src="/assets/images/carousel/${
  product.image
}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${product.price.toFixed(2)}</span>
            <div class="carousel__title">${product.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
        `
      );
    }
    this.elem.addEventListener("click", (event) => {
      if (event.target.closest("button")) {
        let id = event.target.closest(".carousel__slide").dataset.id;
        const productAdd = new CustomEvent("product-add", {
          detail: id,
          bubbles: true,
        });

        this.elem.dispatchEvent(productAdd);
      }
    });
  }
  initCarousel() {
    const liner = this.elem.querySelector(".carousel__inner");
    const nextBtn = this.elem.querySelector(".carousel__arrow_right");
    const prevBtn = this.elem.querySelector(".carousel__arrow_left");
    let position = 0;
    const list = this.elem.querySelectorAll(".carousel__slide");
    prevBtn.style.display = "none";
    for (const item of list) {
      nextBtn.onclick = function () {
        const width = item.offsetWidth;
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
        const width = item.offsetWidth;
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
  
}
