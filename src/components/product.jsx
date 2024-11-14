import './styles/product.css'
import Counter from './Counter'

const Product = function(props) {
    return(
        <div className="product">
            <img className = "image"src={props.product.img} alt="Фото товара" />
            <div>ProductName: {props.product.product_name}</div>
            <div>Price: {props.product.price}</div>
            <Counter/>
        </div>
    )
}

export default Product