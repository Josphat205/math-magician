import React from 'react';
import PropTypes from 'prop-types';
import './Results.css';

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { res } = this.props;
    return (
      <>
        <div className="output">
          <p className="results">{res}</p>
        </div>
      </>
    );
  }
}

Results.propTypes = {
  res: PropTypes.number,
};
Results.defaultProps = {
  res: 0,
};

export default Results;
