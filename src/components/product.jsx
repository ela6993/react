import './styles/product.css'
import Counter from './Counter'

const Product = function(props) {
    return(
        <div className="product">
            <img className = "image"src={props.product.image} alt="Фото товара" />
            <div class = 'info'>
            <div class = 'cat'><div>{props.product.category}</div></div>
            <div class = 'title'>{props.product.title}</div>
            <div class = 'price'>${props.product.price}</div>
            <div class = 'counter'><Counter/></div>
            </div>
        </div>
    )
}

export default Product