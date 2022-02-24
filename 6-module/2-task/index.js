export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = document.createElement("div");
    this.render();
  }
  render() {
    const product = this.product;
    this.elem.classList.add("card");
    this.elem.insertAdjacentHTML(
      "beforeEnd",
      `
        <div class="card__top">
          <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
          <span class="card__price">€${product.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${product.name}</div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
      </div>`
    );
    this.elem.addEventListener('click', (event) => {
      if (event.target.closest('button')) {
        const productAdd = new CustomEvent("product-add", { 
          detail: this.product.id, 
          bubbles: true 
        });
    
        this.elem.dispatchEvent(productAdd);
      }
    });
    return this.elem;
  }	
}