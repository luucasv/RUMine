import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
        <h1>RUMine</h1>
        <br />
        <TextField
          floatingLabelText={'Login'}
          value={this.state.username}
          onChange={this.handleUsernameChange.bind(this)}
        />
        <br />
        <TextField
          floatingLabelText={'Senha'}
          value={this.state.password}
          type={'password'}
          onChange={this.handlePasswordChange.bind(this)}
        />
        <br />
        <TextField
          floatingLabelText={'E-mail'}
          value={this.state.emai}
          onChange={this.handleEmailChange.bind(this)}
        />
        <br />
        <TextField
          floatingLabelText={'cpf'}
          value={this.state.cpf}
          onChange={this.handleCpfChange.bind(this)}
        />
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