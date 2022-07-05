import React, { useState } from 'react';
import './Calculator.css';
import styled from 'styled-components';
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
  const result = `${
    logic.obj.total || logic.obj.operation || logic.obj.next
      ? `${logic.obj.total || ''} ${logic.obj.operation || ''} ${
        logic.obj.next || ''
      }`
      : 0
  }`;
  return (
    <Section>
      <div className="text-div"><h2>Lets Do some Mathematics!</h2></div>
      <Calculate>
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
      </Calculate>
    </Section>
  );
};
const Section = styled.div`
background-color: #f5f5f5;
width: 100%;
margin: 20px auto;
display:flex;
border-radius: 10px;
justify-content: space-between;
@media (max-width: 768px) {
  flex-direction: column;
  justify-content:center;
  align-items:center;
}
`;
const Calculate = styled.div`
width: 40%;
  margin: 50px 20px;
  border-radius: 10px;
  @media (max-width: 768px) {
    width:80%;
  }
`;
export default Calculator;
