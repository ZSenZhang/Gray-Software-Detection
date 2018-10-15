import React from 'react';
import RecordPanel from '../components/RecordPanel';

class RecordContainer extends React.Component {

  render() {
    const Records = [
      {
        iconUrl: '/media/sr_real.png',
        packageName: 'com.adi.remote.phone',
        version: '3.8.2',
        hash: '7be902b37c1eb5fa666c0a7b5954e8dd',
        developer: 'adiroid',
        auth: true,
      },
      {
        iconUrl: '/media/sr_fake.png',
        packageName: 'com.adi.remote.phone',
        version: '3.1.1',
        hash: 'd5750ea37d34869871b58e950ce902fe',
        developer: 'fgd343f',
        auth: false,
      },
    ];
    return(
      <div className="record-container container">
        <h2 className="submission-title">My Submissions</h2>
        <hr/>
        {Records.map((record, i) => <RecordPanel apk={record} key={record.version} />)}
      </div>
    );
  }
}

export default RecordContainer;
