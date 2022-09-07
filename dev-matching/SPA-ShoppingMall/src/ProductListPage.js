import Api from "./Api.js";
import { getPrice } from "./util.js";

export default function ProductListPage({ $app }) {
    this.$target = document.createElement("div");
    this.$target.className = "ProductListPage";

    $app.appendChild(this.$target);

    this.state = { products: [] };
    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };
    const api = new Api();
    this.render = () => {
        this.$target.innerHTML = `
            <h1>상품목록</h1>
            <ul>
            ${this.state.products
                .map(
                    (product) => `
                <li class = "Product" data-id = "${product.id}">
                    <img src = "${product.imageUrl}"/>
                    <div class ="Product__info">
                        <div>${product.name}</div>
                        <div>${getPrice(product.price)}원~</div>
                    </div>
                </li>
            `
                )
                .join("")}
            </ul>
        `;
    };
    this.$target.querySelectorAll(".Product").forEach(($product) => {
        $product.addEventListener("click", (e) => {
            const { dataId } = e.target.dataset;
            if (!dataId) return;
            window.location.href = `/web/products/${dataId}`;
        });
    });

    const fetchProducts = async () => {
        const products = await api.getApi("/products");
        this.setState({ products: products });
    };
    fetchProducts();
}
