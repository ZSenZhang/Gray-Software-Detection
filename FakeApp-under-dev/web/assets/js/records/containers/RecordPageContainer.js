import React from 'react';
import RecordContainer from './RecordContainer';
import SearchTool from '../components/SearchTool';
import ApkStore from '../../share/stores/ApkStore';

import '../style/style.scss';

class RecordPageContainer extends React.Component {

  componentDidMount() {
    ApkStore.getApks();
  }

  render() {
    /*
    const Records = [
      {
        iconUrl: '/media/qq.png',
        packageName: 'com.tencent.mobileqq',
        version: '7.6.0.3525',
        hash: '18ec03208c8d17154e314fb91f2143cb',
        developer: 'Tencent',
        auth: true,
      },
      {
        iconUrl: '/media/wechat.svg',
        packageName: 'com.tencent.wechat',
        version: '6.6.6',
        hash: '75c5c2511701329611885dc31e881e32',
        developer: 'Tencent',
        auth: true,
      },
    ];
    */
    return(
      <div className='records'>
        <div className='title'>
          <span className='D'>
            D{' '}
          </span>
          F A K E R
        </div>
        <SearchTool />
        {
          ApkStore.listLoading?
          <div />:
          <RecordContainer records={ApkStore.apks}/>
        }
      </div>
    );
  }
}

export default RecordPageContainer;
