import React from 'react';

class Banner extends React.PureComponent {

  render() {
    return(
      <div className='banner'>
        <div className='container'>
        <img src='media/df.png' className='logo' />
          <span className='header'>
            DFaker
          </span>
        </div>
      </div>
    );
  }
}

export default Banner;
