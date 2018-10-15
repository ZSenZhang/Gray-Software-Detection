import React from 'react';

class LoginBox extends React.PureComponent {

  render() {
    return(
      <div className="login-box">
      <div class="container">
        <div class="login-container">
          <div id="output"></div>
          <div class="avatar"></div>
          <div class="form-box">
              <form action="" method="">
                  <input name="user" type="text" placeholder="username"/>
                  <input type="password" placeholder="password"/>
                  <button class="btn btn-info btn-block login" type="submit">Login</button>
              </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default LoginBox;
