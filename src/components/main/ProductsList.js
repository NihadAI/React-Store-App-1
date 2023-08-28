import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import axios from 'axios';

const ProductsList = ({ onFavoriteChange, onBasketChange }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/products.json').then(response => {
            setProducts(response.data.products);
        });
    }, []);

    const productCards = products.map(card => {
        const basketCards = JSON.parse(localStorage.getItem('basket')) || [];
        const isCardInBasket = basketCards.includes(card.id);

        return <ProductCard key={card.id} {...card} onFavoriteChange={onFavoriteChange} onBasketChange={onBasketChange} buttonText={isCardInBasket ? 'Cart in basket' : 'Add to cart'} />;
    });

    return <div className="products">{productCards}</div>;
};

ProductsList.propTypes = {
    products: PropTypes.array,
    onFavoriteChange: PropTypes.func,
    onBasketChange: PropTypes.func,
};

export default ProductsList;
