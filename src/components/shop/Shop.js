import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const productAddtoCart = (product) => {
        // console.log(product);
        // cart.push(product);
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        productAddtoCart={productAddtoCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order summery</h4>
                <h3>Selected Item:{cart.length}</h3>
            </div>
        </div>
    );
};

export default Shop;