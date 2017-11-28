import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {orange400, orange700} from 'material-ui/styles/colors';

const fieldTheme = getMuiTheme({
  palette: {
    primary1Color: orange400
  },

  inputColor: {
    color: '#FFA726'
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
      <Form onSubmit={this.handleRegister.bind(this)}>
        <MuiThemeProvider muiTheme={fieldTheme}>
        <div>
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
            inputStyle={fieldTheme.inputColor}
            floatingLabelStyle={fieldTheme.inputColor}
            value={this.state.emai}
            onChange={this.handleEmailChange.bind(this)}
          />
          <br />
          <TextField
            floatingLabelText={'CPF'}
            value={this.state.cpf}
            floatingLabelStyle={fieldTheme.inputColor}
            onChange={this.handleCpfChange.bind(this)}
          />
          </div>
        </MuiThemeProvider>
        <br />
        <RaisedButton label={'Cadastrar'} type='submit'/>
      </Form>
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