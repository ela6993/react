import './styles/product.css'
import Add from './Add'

const Product = function(props) {
    return(
        <div className="product">
            <div class = 'imgBlock'>
                <img className = "image"src={props.product.image} alt="Фото товара" />
            </div>
            <div class = 'info'>
                <div class = 'cat'><div>{props.product.category}</div></div>
                <div class = 'title'>{props.product.title}</div>
                <div class = 'price'>${props.product.price}</div>
                <div class = 'counter'><Add/></div>
            </div>
        </div>
    )
}

export default Product