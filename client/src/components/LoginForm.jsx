import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AuthProvider from '../lib/AuthProvider';
import { orange400 } from 'material-ui/styles/colors';

import '../css/LoginForm.css';

const orangeTheme = getMuiTheme({
  palette: {
    primary1Color: orange400
  }
});

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      ans: ''
    }
    console.log('ans',this.state.ans)
  }

  handleLogin() {
    let ans = AuthProvider.login(this.state.login, this.state.password);
    this.setState({
      ans
    });
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

  render() {
    return (
      <div className='whole-page'>
          <Form>
            {/* Logo do aplicativo */}
            <div className='logo-img'></div>

            {/* Campos de preenchimento */}
            <MuiThemeProvider muiTheme={orangeTheme}>
              <div className='fields'>
                <br />
                <TextField 
                  floatingLabelText={'Login'}
                  floatingLabelStyle={{color: 'white'}}
                  inputStyle={{color: 'white'}}
                  value={this.state.username}
                  onChange={this.handleUsernameChange.bind(this)}
                />
                <br />
                <TextField
                  floatingLabelText={'Senha'}
                  floatingLabelStyle={{color: 'white'}}
                  inputStyle={{color: 'white'}}
                  value={this.state.password}
                  type={'password'}
                  onChange={this.handlePasswordChange.bind(this)}
                />
                <br />
              </div>
            </MuiThemeProvider>

            {/* Botões */}
            <MuiThemeProvider muiTheme={orangeTheme}>
              <div className='buttonRow'>
                <RaisedButton primary={true} label={'Entrar'} style={{margin: 8}} onClick={this.handleLogin.bind(this)}/>
                <Link to='/register'>
                  <RaisedButton label={'Cadastre-se'} />
                </Link>
              </div>
            </MuiThemeProvider>
          </Form>
      </div>
    );
  }
}

const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
`;

export default LoginForm;