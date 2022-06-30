import React from 'react';
import './Buttons.css';
import PropTypes from 'prop-types';

const Buttons = ({
  symbol, handleClick, color, flex,
}) => (
  <>
    <button type="button" name={symbol} className="btn-div" onClick={handleClick} onKeyDown={handleClick} style={{ backgroundColor: color, flexGrow: flex }}>
      {symbol}
    </button>
  </>
);

export default Buttons;

Buttons.propTypes = {
  symbol: PropTypes.number,
  color: PropTypes.string,
  flex: PropTypes.string,
  handleClick: PropTypes.string,
};
Buttons.defaultProps = {
  symbol: 10,
  color: PropTypes.string,
  flex: PropTypes.string,
  handleClick: '',
};
