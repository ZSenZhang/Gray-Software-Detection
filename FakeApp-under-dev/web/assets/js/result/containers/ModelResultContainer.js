import React from 'react';
import PropTypes from 'prop-types';

class ModelResultContainer extends React.Component {
  static propTypes = {
    apk: PropTypes.object.isRequired,
  };

  render() {
    const { apk } = this.props;
    return(
      <div className='model-result'>
        <div className='result-title h4'>Model Analyse</div>
        <div className='update-time'>
          <i className='far fa-calendar-alt' />
          {` ${apk.updateTime}`}
        </div>
        <div className='result-content'>
          <div className='bin-image detail row'>
            <div className='description col-3'>Bin image:</div>
            <div className='value col-9'>
              <img src={apk.binImage} />
            </div>
          </div>
          <hr/>
          <div className='bin-image detail row'>
            <div className='description col-3'>Suspicion:</div>
            <div className='value col-9'>
              {`${apk.suspicion}%`}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModelResultContainer;
