import  React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile } from 'material-ui/GridList';
import ProfileDrawer from '../components/ProfileDrawer.jsx';
import '../css/ProfilePage.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  headerStyle: {
    marginTop: '20%',
    paddingBottom: '5%',
    display: 'block',
    color:'white',
    transitionDuration: '0.3s'
  }
};

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileDrawer/>
      </div>
    )
  }
};

export default Profile;