import React from 'react';

class ProfileCard extends React.PureComponent {

  render() {
    return(
      <div className="mainflip">
        <div className="frontside">
          <div className="card">
              <div className="card-body text-center">
                  <p><img className="img-fluid" src="/media/avatar.png" alt="card image" /></p>
                  <h4 className="card-title">Azeon</h4>
                  <p className="card-text">A developer, simply compiled from source code.</p>
                  <a href="#" className="btn btn-outline-dark btn-sm"><i className="fa fa-plus"></i></a>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
