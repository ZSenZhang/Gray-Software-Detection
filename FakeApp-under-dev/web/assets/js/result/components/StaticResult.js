import React from 'react';
import PropTypes from 'prop-types';

class StaticResult extends React.PureComponent {
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
        </div>
      </div>
    );
  }
}

export default StaticResult;
