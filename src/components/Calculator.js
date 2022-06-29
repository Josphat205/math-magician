import React from 'react';
import './Calculator.css';
// import PropTypes from 'prop-types';
import Buttons from './Buttons';
import Results from './Results';
import calculate from '../logics/calculator';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
  }

  // handle click and set result to current value
  handleClick = (obj) => {
    const val = obj.target.name;
    this.setState((event) => calculate(event, val));
  }

  render() {
    const {
      total, next, operation,
    } = this.state;
    const result = `${total || operation || next ? `${total || ''} ${operation || ''} ${next || ''}` : 0}`;
    return (
      <div className="Calculator">
        <Results res={result} />
        <div className="section-div">
          <Buttons symbol="AC" handleClick={this.handleClick} />
          <Buttons symbol="+/-" handleClick={this.handleClick} />
          <Buttons symbol="%" handleClick={this.handleClick} />
          <Buttons symbol="÷" color="#fb8500" handleClick={this.handleClick} />
        </div>
        <div className="section-div">
          <Buttons symbol="7" handleClick={this.handleClick} />
          <Buttons symbol="8" handleClick={this.handleClick} />
          <Buttons symbol="9" handleClick={this.handleClick} />
          <Buttons symbol="x" handleClick={this.handleClick} color="#fb8500" />
        </div>
        <div className="section-div">
          <Buttons symbol="4" handleClick={this.handleClick} />
          <Buttons symbol="5" handleClick={this.handleClick} />
          <Buttons symbol="6" handleClick={this.handleClick} />
          <Buttons symbol="-" handleClick={this.handleClick} color="#fb8500" />
        </div>
        <div className="section-div">
          <Buttons symbol="1" handleClick={this.handleClick} />
          <Buttons symbol="2" handleClick={this.handleClick} />
          <Buttons symbol="3" handleClick={this.handleClick} />
          <Buttons symbol="+" handleClick={this.handleClick} color="#fb8500" />
        </div>
        <div className="section-div">
          <Buttons symbol="0" handleClick={this.handleClick} flex="2" />
          <Buttons symbol="." handleClick={this.handleClick} />
          <Buttons symbol="=" color="#fb8500" hover="#fcbf49" handleClick={this.handleClick} />
        </div>

      </div>
    );
  }
}
Calculator.propTypes = {

};
Calculator.defaultProps = {
};
export default Calculator;
