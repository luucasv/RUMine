import React from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import { orange400 } from 'material-ui/styles/colors';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import { Paper } from 'material-ui';
import AuthProvider from '../stores/AuthProvider';

export default class ProfileDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: AuthProvider.getUsername(),
      balance: AuthProvider.getBalance(),
      email: AuthProvider.getEmail()
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  componentWillMount() {
    AuthProvider.on('change', () => {
      this.setState({
        username: AuthProvider.getUsername(),
        balance: AuthProvider.getBalance(),
        email: AuthProvider.getEmail()
      });
    });
  }

  render() {
    return (
      <div>

        {/* Botao que ativa o Drawer com as info de perfil */}
        <div>
          <Paper zDepth={4} rounded={true} 
                style={{width:'30%', height: '30%', 
                textAlign: 'center',margin:'auto', 
                marginTop:'20%'}}>
            <div style={{backgroundColor:'orange'}}>
              <img src="/img/editProfile.png" 
                   style={{margin: '5%', width: '80%'}} 
                   onClick={this.handleToggle}/>
            </div>
          </Paper>
        </div>
        
        {/* Drawer com as informacoes de perfil */}
        <div>
          <Drawer
            docked={false}
            width={'90%'}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}>
              {/* Barra laranja superior de saudaçao ao usuario */}
              <AppBar 
                  title={'Olá, ' + this.state.username + '!'}
                  iconElementLeft={<IconButton onClick={this.handleClose}><NavigationClose /></IconButton>}
                  style={{ backgroundColor: orange400}}
              />

              {/* Imagem de perfil do usuario (ilustrativo) */}
              <Paper style={{width: '60%', height: '30%', 
                     margin:'auto', marginTop:'20%', textAlign:'center'}} 
                     zDepth={2} circle={true}>
                <div style={{width:'80%', height: '80%', textAlign: 'center', margin:'auto'}}>
                  <img src="/img/pic.png" style={{width:'100%', height: 'auto'}}/>
                </div>
              </Paper>

              {/* Informaçoes do usuario */}
              <Paper style={{marginTop:'20%'}} zDepth={2}>
                  <List style={{marginTop:'10%'}}>
                      <ListItem primaryText={'Saldo: R$ ' + Number(this.state.balance).toFixed(2)} 
                                leftIcon={<img src="/img/credits.png"/>}/>
                      <ListItem primaryText={'Email: ' + this.state.email}  
                                leftIcon={<img src="/img/email.png"/>}/>
                  </List>
              </Paper>
          </Drawer>
        </div>
      </div>
    );
  }
}