import React from 'react';
import PropTypes from 'prop-types';

class DynamicResultContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showImg: props.apk.screenshots[0],
    };
  }
  static propTypes = {
    apk: PropTypes.object.isRequired,
  };


  render() {
    const { apk } = this.props;
    return(
      <div className='dynamic-result'>
        <div className='result-title h4'>Dynamic Analyse</div>
        <div className='update-time'>
          <i className='far fa-calendar-alt' />
          {` ${apk.updateTime}`}
        </div>
        <div className='result-content'>
          <div className='screenshot detail row'>
            <div className='description col-3'>Screenshot:</div>
            <div className='value col-9'>
              {apk.screenshots.map((screenshot, i) => 
              <img 
                className='mini-pic'
                src={screenshot}
                key={screenshot}
              />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DynamicResultContainer;
