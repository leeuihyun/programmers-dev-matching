const MAX_NUMBER = 5;
export default function SelectedLanguage({ $target, initialState }) {
    this.$element = document.createElement("div");
    this.$element.className = "SelectedLanguage";
    this.state = initialState;
    $target.appendChild(this.$element);

    this.setState = (nextState) => {
        this.state = nextState;
        if (this.state.length > MAX_NUMBER) {
            const startPostion = this.state.length - MAX_NUMBER;
            this.state = this.state.slice(
                startPostion,
                MAX_NUMBER + startPostion
            );
        }
        this.render();
    };
    this.render = () => {
        this.$element.innerHTML = `
            <ul>
                ${this.state.map((item) => `<li>${item}</li>`).join("")}
            </ul>
        `;
    };
    this.render();
}
