import React from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import { orange400, grey300 } from 'material-ui/styles/colors';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import { Avatar, Paper } from 'material-ui';
import { Divider } from 'material-ui/Divider';
import { ContentInbox } from 'material-ui/svg-icons';

const homeButtonStyle = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  overflow: 'hidden',
}

export default class WalletButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <div>
          <Paper zDepth={4} rounded={true} style={{width:'30%', height: '30%', textAlign:'center',margin:'auto'}}>
            <div style={{backgroundColor:'orange'}}>
              <a href="/payment">
                <img src="/img/wallet.png" onClick={this.handleToggle} style={{margin: '5%', width: '80%'}} />
              </a>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}