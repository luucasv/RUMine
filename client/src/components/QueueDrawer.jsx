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
import '../css/QueueDrawer.css';

const style = {
    height: 150,
    width: 150,
    marginTop: '20%',
    marginLeft: '24%',
    textAlign: 'center',
    display: 'inline-block',
    overflow: 'hidden',
};

const menuStyle = {
  marginTop: '20%',
};

const homeButtonStyle = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  overflow: 'hidden',
}

export default class QueueDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <div className='buttonProfile'>
          <Paper zDepth={4} circle={true} style={{display: 'inline-block'}}>
            <div style={{backgroundColor:'orange'}}>
              <img src="/img/filatam.png" onClick={this.handleToggle} style={{marginTop: 5, width: 130, height: 130}}/>
            </div>
          </Paper>
        </div>
        <Drawer
          docked={false}
          width={'60%'}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
            <AppBar 
                title='Estado da fila'
                iconElementLeft={<IconButton onClick={this.handleClose}><NavigationClose /></IconButton>}
                style={{ backgroundColor: orange400}}
            />

            <Paper style={{marginLeft:25, marginTop:30, width: 250, height: 160}}>
              <div>
                <img src="/img/flowqueue.png" onClick={this.handleToggle} style={{width: '100%', height: 'auto'}}/>
              </div>
            </Paper>

            <Paper style={menuStyle} zDepth={2}>
                <List style={{marginTop:'10%'}}>
                    <ListItem primaryText="Tempo estimado: [x]" leftIcon={<img src="/img/relogio.png"/>}/>
                    <ListItem primaryText="Tamanho da fila: [y]" leftIcon={<img src="/img/filatam.png"/>}/>
                    <ListItem primaryText="Última atualização: [z]" leftIcon={<img src="/img/tick.png"/>}/>
                </List>
            </Paper>

        </Drawer>
      </div>
    );
  }
}