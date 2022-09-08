import Api from './Api.js';
import {addCommaToPrice} from './add.js';

export default function ProductDetailPage({$app,productId}){
    this.$target = document.createElement('div');
    this.$target.className = 'ProductDetailPage';
    $app.appendChild(this.$target);

    const api = new Api();

    this.state = {
        product : null,
    }

    this.setState = nextState => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        this.$target.innerHTML = `
            <h1>커피잔 상품 정보</h1>
            <div class = 'ProductDetail'>
                <img src ="${this.state.product.imageUrl}"/>
                <div class = 'ProductDetail__info'>
                    <h2>${this.state.product.name}</h2>
                    <div>${this.state.product.price}원~</div>
                    <select>
                        <option>선택하세요.</option>
                        ${this.state.product.productOptions.map((option)=>`
                            <option value = "${option.id}" ${option.stock ? '' : 'disabled'}>
                                ${option.stock ? "" : "(품절)"}${this.state.product.name}${option.name}${option.stock && option.price ? `(+${addCommaToPrice(option.price)}원` : ''}
                            </option>
                        `).join('')}
                    </select>
                    <div class="ProductDetail__selectedOptions">
              <h3>선택된 상품</h3>
              <ul>
                ${this.state.selectedOptions.map(
                  (option) =>
                    `<li>${option.name} ${addCommaToPrice(
                      (price + option.price) * option.quantity
                    )}원<div>
                      <input name="${option.id}" type="number" min="0" max="${
                      option.stock
                    }" value="${option.quantity}" />개
                    </div></li>`
                )}
              </ul>
              <div class="ProductDetail__totalPrice">${addCommaToPrice(
                this.state.selectedOptions.reduce((acc, option) => {
                  return acc + (price + option.price) * option.quantity;
                }, 0)
              )}원</div>
              <button class="OrderButton">주문하기</button>
            </div>
                </div>
            </div>
        `
    }

    const fetchProduct = async () => {
        const product = await api.get(`/products/${productId}`);
        this.setState({
            product : product
        });       
    }
    fetchProduct();
}
