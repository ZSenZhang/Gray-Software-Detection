import React from 'react';
import PropTypes from 'prop-types';

class AppCard extends React.PureComponent {
  static propTypes = {
    apk: PropTypes.object.isRequired,
  };

  render() {
    const { apk } = this.props;
    return(
      <div className='app-card'>
        <div className="card">
            <div className="card-body text-center">
                <p><img className="img-fluid" src={apk.iconUrl} alt="card image" /></p>
                <h4 className="card-title">{apk.name}</h4>
                <p className="card-text">Version {apk.version}</p>
            </div>
            <div className='step-tab'>
              <div className='static result-link'>
                Static
              </div>
              <span className='divider'>|</span>
              <div className='model result-link'>
                Model
              </div>
              <span className='divider'>|</span>
              <div className='dynamic result-link'>
                Dynamic
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default AppCard;
