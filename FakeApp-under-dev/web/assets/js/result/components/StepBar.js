import React from 'react';

class StepBar extends React.PureComponent {

  render() {
    return(
      <div className='step-bar'>
        <div className='container'>
            <div className='static group-item'>
                <i className="far fa-eye"></i>
                <div className='divider'>
                    <div className='left' />
                    <div className='right' />
                </div>
                <div className='title'>
                    <h4>Static Analyse</h4>
                </div>
            </div>
            <div className='model group-item'>
                <i class="fab fa-sellsy"></i>
                <div className='divider'>
                    <div className='left' />
                    <div className='right' />
                </div>
                <div className='title'>
                    <h4>Model Analyse</h4>
                </div>
            </div>
            <div className='dynamic group-item'>
                <i class="fab fa-android"></i>
                <div className='divider'>
                    <div className='left' />
                    <div className='right' />
                </div>
                <div className='title'>
                    <h4>Dynamic Analyse</h4>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default StepBar;
