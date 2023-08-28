import PropTypes from 'prop-types';

const ShopingBasket = ({ shoppingBasketCount }) => {
    return (
        <div className="header-top__shopping-basket">
            <img className="header-top__shopping-basket__img" src="/img/basket.svg" alt="Shopping basket" />
            <p className="header-top__shopping-basket__count">Cart ({shoppingBasketCount})</p>
        </div>
    );
};

ShopingBasket.propTypes = {
    shoppingBasketCount: PropTypes.number.isRequired,
};

export default ShopingBasket;
