import React from 'react';
import Dropzone from 'react-dropzone'
import {  Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../style/style.scss';

class AnalyseContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      files: [],
      modal: false,
      info: '',
    };
  }

  onDrop = (files) => {
    this.setState({
      files
    });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleClick = () => {
    const files = this.state.files;
    if(files.length > 0) {
      this.setState({
        files: [],
        info: `It's a fake APP!`,
      });
    } else {
      this.setState({
        info: `Please upload an apk file first!`,
      });
    }
    this.toggle();
  }

  render() {
    const files = this.state.files;
    return(
      <div className='analyse'>
        <div className='title'>
          <span className='D'>
            D{' '}
          </span>
          F A K E R
        </div>
        <div className='container'>
          <div className="dropzone">
            <Dropzone onDrop={this.onDrop.bind(this)}>
              <p>
                {
                  files.length == 0 ?
                  'Drop a file to upload' :
                  this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                }
              </p>
            </Dropzone>
          </div>
          <Button className='submit' onClick={this.handleClick}>Analyse!</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Notice</ModalHeader>
            <ModalBody>
              {this.state.info}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Got it!</Button>{' '}
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AnalyseContainer;
