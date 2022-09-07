import ProductListPage from "./ProductListPage.js";
import CartPage from "./CartPage.js";
import ProductDetailPage from "./ProductDetailPage.js";

export default function App({ $app }) {
    this.route = () => {
        const { pathname } = location;
        console.log(pathname);
        $app.innerHTML = "";
        if (pathname === "/web/") {
            new ProductListPage({ $app }).render();
        } else if (pathname.indexOf("/products/") === 0) {
            const [, , productId] = pathname.split("/");
            new ProductDetailPage({ $app, productId }).render();
        } else if (pathname === "/web/cart") {
            new CartPage({ $app }).render();
        }
    };
    this.route();
}
