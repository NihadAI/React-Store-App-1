import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/button/Button';
import Modal from '../UI/modal/Modal';
import './productCard.scss';

const ProductCard = ({ id, image, name, genre, price, onFavoriteChange, onBasketChange, hideStar, hideButton, buttonText }) => {
    const [openModal, setOpenModal] = useState(false);
    const [isCardInFavorite, setIsCardInFavorite] = useState(false);
    const [isCardInBasket, setIsCardInBasket] = useState(false);

    const handleModal = () => {
        setOpenModal(prevState => !prevState);
    };

    useEffect(() => {
        const favoriteCards = JSON.parse(localStorage.getItem('favorite')) || [];
        const isCardInFavorite = favoriteCards.includes(id);
        const basketCards = JSON.parse(localStorage.getItem('basket')) || [];
        const isCardInBasket = basketCards.includes(id);
        setIsCardInFavorite(isCardInFavorite);
        setIsCardInBasket(isCardInBasket);
    }, [id]);

    const isFavorite = () => {
        const favoriteCards = JSON.parse(localStorage.getItem('favorite')) || [];
        const isCardInFavorite = favoriteCards.includes(id);
        const updatedFavoriteCards = isCardInFavorite ? favoriteCards.filter(cardId => cardId !== id) : [...favoriteCards, id];
        localStorage.setItem('favorite', JSON.stringify(updatedFavoriteCards));
        setIsCardInFavorite(!isCardInFavorite);
        onFavoriteChange(updatedFavoriteCards);
    };

    const isBasket = () => {
        const basketCards = JSON.parse(localStorage.getItem('basket')) || [];
        const isCardInBasket = basketCards.includes(id);
        const updatedBasketCards = isCardInBasket ? basketCards.filter(cardId => cardId !== id) : [...basketCards, id];
        localStorage.setItem('basket', JSON.stringify(updatedBasketCards));
        setIsCardInBasket(!isCardInBasket);
        onBasketChange(updatedBasketCards);
        setOpenModal(false);
    };

    return (
        <div className="card">
            <div className="card__img-container">
                <img className="card__img" src={image} alt="" />
            </div>

            <div className="card__main">
                {!hideStar && <img className="card__main-favorite-icon" src={isCardInFavorite ? '/img/star-colored.svg' : '/img/star-black.svg'} onClick={isFavorite} alt="favorite star" />}
                <h1 className="card__main-name">{name}</h1>
                <p className="card__main-genre">{genre}</p>
            </div>
            <div className="card__footer">
                <p className="card__footer-price">{price} $</p>
                {!hideButton && <Button className="card__footer-button" text={buttonText} onClick={handleModal} />}
                {openModal && (
                    <Modal
                        header={name}
                        closeButton={true}
                        onClose={handleModal}
                        text={isCardInBasket ? 'Are you sure you want to remove this game from your shopping basket?' : 'Are you sure you want to add this game to your shopping basket?'}
                        actions={
                            <div className="modal__footer">
                                <Button className="card__footer-button" text="Yes" onClick={isBasket} />
                                <Button className="card__footer-button" text="No" onClick={handleModal} />
                            </div>
                        }
                    />
                )}
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onFavoriteChange: PropTypes.func,
    onBasketChange: PropTypes.func,
    hideStar: PropTypes.bool,
    hideButton: PropTypes.bool,
    buttonText: PropTypes.string,
};

ProductCard.defaultProps = {
    hideStar: false,
    hideButton: false,
    buttonText: '',
};

export default ProductCard;
