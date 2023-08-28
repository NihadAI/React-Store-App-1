import { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './components/header/Header';
import Main from './components/main/Main';
import BasketList from './pages/BasketList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import FavoriteList from './pages/FavoriteList';

const AppRoutes = () => {
    const [favorite, setFavorite] = useState(localStorage.getItem('favorite') ? JSON.parse(localStorage.getItem('favorite')) : []);
    const [basket, setBasket] = useState(localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []);

    const handleFavoriteChange = count => {
        setFavorite(count);
    };

    const handleBasketChange = count => {
        setBasket(count);
    };

    return (
        <Router>
            <div className="App">
                <Header favoriteCount={favorite.length} shoppingBasketCount={basket.length} />
                <Routes>
                    <Route path="/" element={<Main onFavoriteChange={handleFavoriteChange} onBasketChange={handleBasketChange} />} />
                    <Route path="/basket" element={<BasketList onBasketChange={handleBasketChange} />} />
                    <Route path="/favorite" element={<FavoriteList onFavoriteChange={handleFavoriteChange} onBasketChange={handleBasketChange} />} />
                </Routes>
            </div>
        </Router>
    );
};

AppRoutes.propTypes = {
    favoriteCount: PropTypes.number,
    shoppingBasketCount: PropTypes.number,
};

export default AppRoutes;
