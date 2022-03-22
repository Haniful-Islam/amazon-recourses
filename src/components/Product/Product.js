import { faCartArrowDown, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({ product, productAddtoCart }) => {

    // console.log(props)
    // const { product, productAddtoCart } = props;
    const { img, name, price, seller, ratings } = product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className='product-info'>
                <p className="product-name">{name}</p>
                <p className="product-price">price: ${price}</p>
                <p className="product-seller">Manufacturer:{seller}</p>
                <p className="product-ratings">Ratings:{ratings} star</p>
            </div>
            <button onClick={() => productAddtoCart(product)} className='btn-cart'><span>Add to Cart</span>
                <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;