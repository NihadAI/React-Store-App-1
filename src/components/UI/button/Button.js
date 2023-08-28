import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ text, onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Button;
