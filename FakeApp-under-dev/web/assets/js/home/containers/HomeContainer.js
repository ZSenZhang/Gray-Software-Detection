import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardDeck } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ANALYSE_PIC_URL, DEVELOPER_PIC_URL, HISTORY_PIC_URL } from '../../constants';
import '../style/style.scss';

class HomeContainer extends React.Component {
  handleClick = () => {
    browserHistory.push('/analyse');
  }

  render() {
    return(
      <div className='home'>
        <div className='title'>
          <span className='D'>
            D{' '}
          </span>
          F A K E R
        </div>
        <div className='container'>
          <CardDeck>
            <Card>
              <CardImg src={ANALYSE_PIC_URL} alt='Fake or Real?' className='card-img' />
              <CardBody>
                <CardTitle>Detect the Faker</CardTitle>
                <CardText>Is this APP a real one or a Faker?</CardText>
                <Link to='/analyse/'>
                <Button outline color='dark' className='pull-right'>Check it!</Button>
                </Link>
              </CardBody>
            </Card>
            <Card>
              <CardImg src={DEVELOPER_PIC_URL} alt='Welcome, developer!' className='card-img' />
              <CardBody>
                <CardTitle>Developer Panel</CardTitle>
                <CardText>Upload your app, or those fakers</CardText>
                <Link to='/developer/'>
                <Button outline color='dark' className='pull-right'>Check it!</Button>
                </Link>
              </CardBody>
            </Card>
            <Card>
              <CardImg src={HISTORY_PIC_URL} alt='More info HERE!' className='card-img' />
              <CardBody>
                <CardTitle>Apk Records</CardTitle>
                <CardText>Gallery of APK collections</CardText>
                <Link to='/history/'>
                <Button outline color='dark' className='pull-right'>Check it!</Button>
                </Link>
              </CardBody>
            </Card>
          </CardDeck>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
