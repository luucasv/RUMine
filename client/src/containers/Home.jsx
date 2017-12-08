import  React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile } from 'material-ui/GridList';
import ProfileDrawer from '../components/ProfileDrawer.jsx';
import QueueDrawer from '../components/QueueDrawer.jsx';
import WalletButton from '../components/WalletButton.jsx';


class Home extends Component {
  render() {
    return (
      <div style={{backgroundSize:'cover', backgroundImage: 'url(' + '/img/blurredRU.png' + ')', 
          backgroundRepeat: 'no-repeat', width:'100%', height:'100%', position:'fixed', 
          marginTop:'-2%', marginLeft:'-2%'}}>

        <div style={{width:'100%', height:'30%'}}>
          <ProfileDrawer/>
        </div>

        <div style={{width:'100%', height:'30%'}}>
          <QueueDrawer/>
        </div>

        <div style={{width:'100%', height:'30%'}}>
          <WalletButton/>
        </div>
      </div>
    )
  }
};

export default Home;