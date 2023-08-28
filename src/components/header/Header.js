import React from 'react';
import PropTypes from 'prop-types';
import ShopingBasket from './ShopingBasket';
import Favorite from './Favorite';
import Button from '../UI/button/Button';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './header.scss';

const Header = ({ favoriteCount, shoppingBasketCount }) => {
    return (
        <header className="header">
            <div className="header-top">
                <div className="header-top__navbar container">
                    <div className="header-top__navbar__icons">
                        <img src="/img/facebook-top-icon.svg" alt="facebook" />
                        <img src="/img/top-dribble-icon.svg" alt="dribble" />
                        <img src="/img/top-mail-icon.svg" alt="mail" />
                        <img src="/img/top-twitter-icon.svg" alt="twitter" />
                        <img src="/img/top-vimeo-icon.svg" alt="vimeo" />
                    </div>
                    <div className="header-top__navbar__shop">
                        <Link to="/basket" className="link">
                            <ShopingBasket shoppingBasketCount={shoppingBasketCount} />
                        </Link>
                        <Link to="/favorite" className="link">
                            <Favorite favoriteCount={favoriteCount} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="header-main">
                <div className="header-main__navbar container">
                    <Link to="/" className="link">
                        <Logo />
                    </Link>
                    {/*TO DO: Separate component for game search */}
                    <div className="header-main__search">
                        <Button text="Search" className="header-main__search-button" />
                    </div>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    favoriteCount: PropTypes.number.isRequired,
    shoppingBasketCount: PropTypes.number.isRequired,
};

export default Header;
