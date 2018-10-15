import React from 'react';
import PropTypes from 'prop-types';

class StaticResultContainer extends React.Component {
  static propTypes = {
    apk: PropTypes.object.isRequired,
  };

  render() {
    const { apk } = this.props;
    return(
      <div className='static-result'>
        <div className='result-title h4'>Static Analyse</div>
        <div className='update-time'>
          <i className='far fa-calendar-alt' />
          {` ${apk.updateTime}`}
        </div>
        <div className='result-content'>
          <div className='filename detail row'>
            <div className='description col-3'>File Name:</div>
            <div className='value col-9'>{apk.filename}</div>
          </div>
          <hr/>
          <div className='size detail row'>
            <div className='description col-3'>Size:</div>
            <div className='value col-9'>{apk.size} Bytes</div>
          </div>
          <hr/>
          <div className='developer detail row'>
            <div className='description col-3'>Developer:</div>
            <div className='value col-9'>{apk.developer}</div>
          </div>
          <hr/>
          <div className='file-hash detail row'>
            <div className='description col-3'>File Hash:</div>
            <div className='value col-9'>{apk.fileHash}</div>
          </div>
          <hr/>
          <div className='cert-hash detail row'>
            <div className='description col-3'>Cert Hash:</div>
            <div className='value col-9'>{apk.certHash}</div>
          </div>
          <hr/>
          <div className='alike-apk detail row'>
            <div className='description col-3'>Looks like:</div>
            <div className='alike-apk col-9'>
              <img src={apk.alikeIconUrl} />
              <span className='alike-name'>
              {` ${apk.alikeApkName}`}</span>
            </div>
          </div>
          <hr/>
          <div className='permissions detail row'>
            <div className='description col-3'>Permissions:</div>
            <div className='value col-9'>
              {apk.permissions.map((permission, i) => <span className='item-value' key={permission}>{permission}</span>)}
            </div>
          </div>
          <hr/>
          <div className='activities detail row'>
            <div className='description col-3'>Activities:</div>
            <div className='value col-9'>
            {apk.activities.map((activity, i) => <span className='item-value' key={activity}>{activity}</span>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StaticResultContainer;
