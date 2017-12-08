import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { orange400 } from 'material-ui/styles/colors';

import '../css/RegisterForm.css';
import '../css/LoginForm.css';

const orangeTheme = getMuiTheme({
  palette: {
    primary1Color: orange400
  }
});

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      cpf: '',
      email: ''
    }
  }

  handleRegister(event) {
    console.log(event);
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleCpfChange(event) {
    this.setState({
      cpf: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  render() {
    return (
      <div className='whole-page'>
        <Form onSubmit={this.handleRegister.bind(this)}>
          {/* Logo da pagina de cadastro */}
          <div className='logoCadastro'></div>

          {/* Campos de preenchimento */}
          <MuiThemeProvider muiTheme={orangeTheme}>
            <div>
              <br />
              <TextField
                floatingLabelText={'Login'}
                value={this.state.username}
                floatingLabelStyle={{color: 'white'}}
                inputStyle={{color: 'white'}}
                onChange={this.handleUsernameChange.bind(this)}
              />
              <br />
              <TextField
                floatingLabelText={'Senha'}
                value={this.state.password}
                floatingLabelStyle={{color: 'white'}}
                inputStyle={{color: 'white'}}
                type={'password'}
                onChange={this.handlePasswordChange.bind(this)}
              />
              <br />
              <TextField
                floatingLabelText={'E-mail'}
                floatingLabelStyle={{color: 'white'}}
                inputStyle={{color: 'white'}}
                value={this.state.email}
                onChange={this.handleEmailChange.bind(this)}
              />
              <br />
              <TextField
                floatingLabelText={'CPF'}
                value={this.state.cpf}
                floatingLabelStyle={{color: 'white'}}
                onChange={this.handleCpfChange.bind(this)}
                inputStyle={{color: 'white'}}
              />
              <br/>
            </div>
          </MuiThemeProvider>

          {/* Botoes */}
          <MuiThemeProvider muiTheme={orangeTheme}>
            <div className='buttonRow'>
              <RaisedButton primary={true} 
                            label={'Cadastrar'} style={{margin: 8}}/>
              <Link to='/'>
                <RaisedButton label={'Voltar'} />
              </Link>
            </div>
          </MuiThemeProvider>
        </Form>
      </div>
    );
  }
}

export default RegisterForm;

const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
`;