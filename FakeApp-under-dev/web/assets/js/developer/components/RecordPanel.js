import React from 'react';
import PropTypes from 'prop-types';

class RecordPanel extends React.PureComponent {
  static propTypes = {
    apk: PropTypes.object.isRequired,
  }

  render() {
    const {apk} = this.props;
    return(
      <div className="record-panel">
        <div className="apk-icon">
          <img src={apk.iconUrl} />
        </div>
        <div className="apk-detail">
          <p className="name">Package Name: {apk.packageName}</p>
          <p className="version">Version: {apk.version}</p>
          <p className="hash">Hash: {apk.hash}</p>
          <p className="developer">Developer: {apk.developer}</p>
          <p className="auth">Auth:{' '}
            <span className={apk.auth?'real':'fake'}>
              <i className="fas fa-circle"></i>{' '}
            </span>
            {apk.auth?'Real':'Fake'}
          </p>
        </div>
      </div>
    );
  }
}

export default RecordPanel;
