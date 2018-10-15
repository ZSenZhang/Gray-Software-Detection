import React from 'react';
import StaticResultContainer from './StaticResultContainer';
import ModelResultContainer from './ModelResultContainer';
import DynamicResultContainer from './DynamicResultContainer';
import PropTypes from 'prop-types';

class ResultContainer extends React.Component {
  static propTypes = {
    apk: PropTypes.object.isRequired,
  };

  render() {
    const { apk } = this.props;
    return(
      <div className='result'>
        <div className='card'>
          <DynamicResultContainer apk={apk}/>
        </div>
      </div>
    );
  }
}

export default ResultContainer;
