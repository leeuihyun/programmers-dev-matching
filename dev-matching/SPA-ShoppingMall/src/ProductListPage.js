import Api from './Api.js';
import {addCommaToPrice} from './add.js';
export default function ProductListPage({$app}){
    this.state = {
        items : [],
    }
    const api = new Api();
    this.$target = document.createElement('div');
    this.$target.className = 'ProductListPage';
    $app.appendChild(this.$target);

    this.setState = nextState => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        this.$target.innerHTML = `
            <h1>상품목록</h1>
            <ul>
                ${this.state.items.map((item)=>`
                    <li class ="Product" data-item-id = "${item.id}">
                        <img src="${item.imageUrl}" data-item-id = "${item.id}"/>
                        <div class = "Product__info" data-item-id = "${item.id}">
                            <div>${item.name}</div>
                            <div>${addCommaToPrice(item.price)}원~</div>
                        </div>
                    </li>
                `).join('')}
            </ul>
        `
        this.$target.querySelectorAll(".Product").forEach(($item)=>{
            $item.addEventListener("click", (e) => {
                const {itemId} = e.target.dataset; 
                console.log(`click`);
                location.href = `/web/products/${itemId}`;  
            })
        })
    }
    
    const fetchItems = async() => {
        const items = await api.get('/products');
        this.setState({
            items 
        })
    }
    fetchItems();
}
