import React from 'react';
import ProfileCard from '../components/ProfileCard';
import RecordContainer from './RecordContainer';
import {  Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../style/style.scss';

class DeveloperContainer extends React.Component {

  render() {
    return(
      <div className='developer'>
        <ProfileCard />
        <RecordContainer />
      </div>
    );
  }
}

export default DeveloperContainer;
