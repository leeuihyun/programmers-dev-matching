import Api from "./Api.js";

export default function ProductListPage({ $target }) {
    const $page = document.createElement("div");
    $page.className = "ProductListPage";

    $target.appendChild($page);

    this.state = { products: [] };
    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };
    const api = new Api();
    this.render = () => {
        $page.innerHTML = `
            <h1>상품목록</h1>
            <ul>
            ${this.state.products
                .map(
                    (product) => `
                <li class = "Product">
                    <img src = "${product.imageUrl}"/>
                    <div class ="Product__info">
                        <div>${product.name}</div>
                        <div>${product.price}원~</div>
                    </div>
                </li>
            `
                )
                .join("")}
            </ul>
        `;
    };
    const fetchProducts = async () => {
        const products = await api.getApi("/products");
        this.setState({ products });
    };
    fetchProducts();
}
