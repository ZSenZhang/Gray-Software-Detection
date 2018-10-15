import React from 'react';
import RecordPanel from '../components/RecordPanel';
import PropTypes from 'prop-types';

class RecordContainer extends React.Component {

  static propTypes = {
    records: PropTypes.array.isRequired,
  }

  render() {
    const { records } = this.props;
    return(
      <div className="record-container container">
        <hr/>
        {records.map((record, i) => <RecordPanel apk={record} key={record.version} />)}
      </div>
    );
  }
}

export default RecordContainer;
