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

const style = {
    height: 150,
    width: 150,
    marginTop: '20%',
    marginLeft: '29%',
    textAlign: 'center',
    display: 'inline-block',
    overflow: 'hidden',
};

const menuStyle = {
    marginTop: '20%',
}

export default class ProfileDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <RaisedButton
          label="Visualizar perfil"
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={'100%'}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
            <AppBar 
                title='Olá, [nome]!'
                iconElementLeft={<IconButton onClick={this.handleClose}><NavigationClose /></IconButton>}
                style={{ backgroundColor: orange400}}
            />

            <Paper style={style} zDepth={2} circle={true}>
                <img src="/img/pic.png" style={{width: '100%', height: 'auto'}}/>
            </Paper>

            <Paper style={menuStyle} zDepth={2}>
                <List style={{marginTop:'10%'}}>
                    <ListItem primaryText="Saldo: R$[valor]" leftIcon={<img src="/img/credits.png"/>}/>
                    <ListItem primaryText="Email: [email]" leftIcon={<img src="/img/email.png"/>}/>
                </List>
            </Paper>
        </Drawer>
      </div>
    );
  }
}