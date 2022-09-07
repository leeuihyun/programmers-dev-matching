export default function ProductDetailPage({ $app, productId }) {
    this.state = {
        productId,
    };
    this.$target = document.createElement("div");

    this.$target.className = "ProductDetail";
    this.$target.innerHTML = `<h1>상품 정보</h1>`;

    this.render = () => {
        $app.appendChild(this.$target);
    };
}
