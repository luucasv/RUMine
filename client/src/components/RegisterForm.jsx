import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {orange400, orange700} from 'material-ui/styles/colors';
import '../css/RegisterForm.css';
import '../css/LoginForm.css';

const fieldTheme = getMuiTheme({
  palette: {
    primary1Color: orange400
  },

  inputColor: {
    color: '#FFFFFF'
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
          <div className='logoCadastro'></div>
          <MuiThemeProvider muiTheme={fieldTheme}>
          <div className='usrInfo'>
            <br />
            <TextField
              floatingLabelText={'Login'}
              value={this.state.username}
              floatingLabelStyle={fieldTheme.inputColor}
              inputStyle={fieldTheme.inputColor}
              onChange={this.handleUsernameChange.bind(this)}
            />
            <br />
            <TextField
              floatingLabelText={'Senha'}
              value={this.state.password}
              floatingLabelStyle={fieldTheme.inputColor}
              inputStyle={fieldTheme.inputColor}
              type={'password'}
              onChange={this.handlePasswordChange.bind(this)}
            />
            <br />
            <TextField
              floatingLabelText={'E-mail'}
              floatingLabelStyle={fieldTheme.inputColor}
              inputStyle={fieldTheme.inputColor}
              value={this.state.email}
              onChange={this.handleEmailChange.bind(this)}
            />
            <br />
            <TextField
              floatingLabelText={'CPF'}
              value={this.state.cpf}
              floatingLabelStyle={fieldTheme.inputColor}
              onChange={this.handleCpfChange.bind(this)}
              inputStyle={fieldTheme.inputColor}
            />
            </div>
          </MuiThemeProvider>
          <br />
          <MuiThemeProvider muiTheme={fieldTheme}>
            <RaisedButton primary={true} label={'Confirmar'} />
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