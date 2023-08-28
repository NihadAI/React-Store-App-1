import PropTypes from 'prop-types';

const Favorite = ({ favoriteCount }) => {
    return (
        <div className="header-top__favorite">
            <img className="header-top__favorite__img" src="/img/star-white.svg" alt="Favorite star" />
            <p className="header-top__favorite__count">({favoriteCount})</p>
        </div>
    );
};

Favorite.propTypes = {
    favoriteCount: PropTypes.number.isRequired,
};

export default Favorite;
