import React from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import { Paper } from 'material-ui';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import { orange400 } from 'material-ui/styles/colors';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

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

        {/* Botao que ativa o drawer com as infos da fila */}
        <div>
          <Paper zDepth={4} rounded={true} 
                 style={{width:'30%', height: '30%', 
                 margin:'auto',textAlign:'center'}}>

              <div style={{backgroundColor:'orange'}}>
                <img src="/img/filatam.png" 
                     style={{margin: '5%', width: '80%'}} 
                     onClick={this.handleToggle}/>
              </div>   
          </Paper>
        </div>

        
        {/* Drawer com as informaçoes da fila */}
        <Drawer
          docked={false}
          open={this.state.open}
          width={'90%'}
          onRequestChange={(open) => this.setState({open})}
        >

            {/* Barra superior do drawer */}
            <AppBar 
                title='Estado da fila'
                iconElementLeft={<IconButton onClick={this.handleClose}><NavigationClose /></IconButton>}
                style={{ backgroundColor: orange400}}
            />

            {/* Grafico mostrando o fluxo de pessoas na fila (ilustrativo) */}
            <Paper style={{width: '80%', height: 'auto', 
                   margin:'auto', marginTop:'20%', 
                   textAlign:'center'}}>
              <div style={{width:'80%', height:'80%'}}>
                <img src="/img/flowqueue.png" 
                     style={{width: '100%', height: 'auto'}}/>
              </div>
            </Paper>

            {/* Informaçoes da fila */}
            <Paper style={{marginTop:'20%'}} zDepth={2}>
                <List>
                    <ListItem primaryText="Tempo estimado: [x]" 
                              leftIcon={<img src="/img/relogio.png"/>}/>
                    <ListItem primaryText="Tamanho da fila: [y]" 
                              leftIcon={<img src="/img/filatam.png"/>}/>
                    <ListItem primaryText="Última atualização: [z]" 
                              leftIcon={<img src="/img/tick.png"/>}/>
                </List>
            </Paper>

        </Drawer>
      </div>
    );
  }
}