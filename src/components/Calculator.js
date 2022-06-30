import React, { useState } from 'react';
import './Calculator.css';
import Buttons from './Buttons';
import Results from './Results';
import calculate from '../logics/calculator';

const Calculator = () => {
  const [logic, setLogic] = useState({
    obj: {
      total: 0,
      next: '',
      operation: '',
    },
  });
  // handle click and set result to current value
  const handleClick = (e) => {
    const val = e.target.name;
    setLogic(({ obj }) => ({ obj: calculate(obj, val) }));
  };
  const result = `${logic.obj.total || logic.obj.operation || logic.obj.next ? `${logic.obj.total || ''} ${logic.obj.operation || ''} ${logic.obj.next || ''}` : 0}`;
  return (
    <div className="Calculator">
      <Results res={result} />
      <div className="section-div">
        <Buttons symbol="AC" handleClick={handleClick} />
        <Buttons symbol="+/-" handleClick={handleClick} />
        <Buttons symbol="%" handleClick={handleClick} />
        <Buttons symbol="÷" color="#fb8500" handleClick={handleClick} />
      </div>
      <div className="section-div">
        <Buttons symbol="7" handleClick={handleClick} />
        <Buttons symbol="8" handleClick={handleClick} />
        <Buttons symbol="9" handleClick={handleClick} />
        <Buttons symbol="x" handleClick={handleClick} color="#fb8500" />
      </div>
      <div className="section-div">
        <Buttons symbol="4" handleClick={handleClick} />
        <Buttons symbol="5" handleClick={handleClick} />
        <Buttons symbol="6" handleClick={handleClick} />
        <Buttons symbol="-" handleClick={handleClick} color="#fb8500" />
      </div>
      <div className="section-div">
        <Buttons symbol="1" handleClick={handleClick} />
        <Buttons symbol="2" handleClick={handleClick} />
        <Buttons symbol="3" handleClick={handleClick} />
        <Buttons symbol="+" handleClick={handleClick} color="#fb8500" />
      </div>
      <div className="section-div">
        <Buttons symbol="0" handleClick={handleClick} flex="2" />
        <Buttons symbol="." handleClick={handleClick} />
        <Buttons
          symbol="="
          color="#fb8500"
          hover="#fcbf49"
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Calculator;
