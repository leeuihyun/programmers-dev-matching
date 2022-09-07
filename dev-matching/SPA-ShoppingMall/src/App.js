import ProductListPage from "./ProductListPage.js";
import CartPage from "./CartPage.js";
import ProductDetailPage from "./ProductDetailPage.js";

export default function App({ $target }) {
    this.route = () => {
        const { pathname } = location;
        console.log(pathname);
        $target.innerHTML = "";
        if (pathname === "/web/") {
            new ProductListPage({ $target }).render();
        } else if (pathname.indexOf("/products/") === 0) {
            const [, , productId] = pathname.split("/");
            new ProductDetailPage({ $target, productId }).render();
        } else if (pathname === "/web/cart") {
            new CartPage({ $target }).render();
        }
    };
    this.route();
}
