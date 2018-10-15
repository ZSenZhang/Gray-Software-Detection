import React from 'react';
import LoginBox from '../components/LoginBox';

import '../style/style.scss';

class LoginContainer extends React.Component {

  render() {
    return(
      <div className="login">
        <LoginBox />
      </div>
    );
  }
}

export default LoginContainer;
