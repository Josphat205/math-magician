import React from 'react';
import './Buttons.css';
import PropTypes from 'prop-types';

class Buttons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const {
      symbol, color, flex,
    } = this.props;
    const { handleClick } = this.props;
    return (
      <>
        <button type="button" name={symbol} className="btn-div" onClick={handleClick} onKeyDown={handleClick} style={{ backgroundColor: color, flexGrow: flex }}>
          {symbol}
        </button>
      </>
    );
  }
}

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
export default Buttons;
