export default function CardPage({ $app }) {
    this.$target = document.createElement("div");
    this.$target.className = "CartPage";
    this.$target.innerHTML = "<h1>장바구니</h1>";

    this.render = () => {
        $app.appendChild(this.$target);
    };
}
