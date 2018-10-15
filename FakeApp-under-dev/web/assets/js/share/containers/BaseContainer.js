import React from 'react';
import Banner from '../components/Banner';
import NavBar from '../components/NavBar'
import PropTypes from 'prop-types';

import '../style/style.scss';

class BaseContainer extends React.PureComponent {
  static propTypes = {
    component: PropTypes.func.isRequired,
  };

  render() {
    const Component = this.props.component;
    return(
      <div>
        <NavBar />
        <Component />
      </div>
    );
  }
}

export default BaseContainer;
