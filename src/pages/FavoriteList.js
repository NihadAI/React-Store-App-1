import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/main/ProductCard';

import axios from 'axios';

const FavoriteList = ({ onFavoriteChange, onBasketChange }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/products.json').then(response => {
            setProducts(response.data.products);
        });
    }, []);

    const getFavoriteProducts = () => {
        const favoriteProducts = JSON.parse(localStorage.getItem('favorite')) || [];
        return products.filter(card => favoriteProducts.includes(card.id));
    };

    const favoriteProducts = getFavoriteProducts();

    return (
        <div className="card-list container">
            {favoriteProducts.length > 0 ? (
                favoriteProducts.map(card => {
                    const basketCards = JSON.parse(localStorage.getItem('basket')) || [];
                    const isCardInBasket = basketCards.includes(card.id);

                    return (
                        <div className="card" key={card.id}>
                            <ProductCard {...card} onFavoriteChange={onFavoriteChange} onBasketChange={onBasketChange} buttonText={isCardInBasket ? 'Cart in basket' : 'Add to cart'} />
                        </div>
                    );
                })
            ) : (
                <p className="empty-basket">Favorite is empty</p>
            )}
        </div>
    );
};

FavoriteList.propTypes = {
    onFavoriteChange: PropTypes.func,
    onBasketChange: PropTypes.func,
};

export default FavoriteList;
