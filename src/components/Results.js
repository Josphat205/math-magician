import React from 'react';
import PropTypes from 'prop-types';
import './Results.css';

const Results = ({ res }) => (
  <>
    <div className="output">
      <p className="results">{res}</p>
    </div>
  </>
);

export default Results;

Results.propTypes = {
  res: PropTypes.number,
};
Results.defaultProps = {
  res: 0,
};
