import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/main/ProductCard';
import Button from '../components/UI/button/Button';
import axios from 'axios';

const BasketList = ({ onBasketChange }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/products.json').then(response => {
            setProducts(response.data.products);
        });
    }, []);

    const getBasketProducts = () => {
        const basketProducts = JSON.parse(localStorage.getItem('basket')) || [];
        return products.filter(card => basketProducts.includes(card.id));
    };

    const basketProducts = getBasketProducts();

    return (
        <div className="card-list container">
            {basketProducts.length > 0 ? (
                basketProducts.map(card => (
                    <div className="card" key={card.id}>
                        <ProductCard {...card} onBasketChange={onBasketChange} hideStar buttonText="X" />

                        <Button className="card__footer-button buy-button" text="buy" />
                    </div>
                ))
            ) : (
                <p className="empty-basket">Shopping basket is empty</p>
            )}
        </div>
    );
};

BasketList.propTypes = {
    onBasketChange: PropTypes.func,
};

export default BasketList;
