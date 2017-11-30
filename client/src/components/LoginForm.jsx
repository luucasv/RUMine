import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AuthProvider from '../lib/AuthProvider';
import {orange400, orange700, blue200} from 'material-ui/styles/colors';
import '../css/LoginForm.css';

const buttonTheme = getMuiTheme({
  palette: {
    primary1Color: orange400
  }
});

const fieldTheme = getMuiTheme({
  palette: {
    primary1Color: orange400
  },

  inputColor: {
    color: '#FFFFFF'
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
      <div className='homepage'>
      <div className='logo-img'></div>
          <Form>
            <MuiThemeProvider muiTheme={fieldTheme}>
              <div className='fields'>
                <br />
                <TextField 
                  floatingLabelText={'Login'}
                  floatingLabelStyle={fieldTheme.inputColor}
                  inputStyle={fieldTheme.inputColor}
                  value={this.state.username}
                  onChange={this.handleUsernameChange.bind(this)}
                />
                <br />
                <TextField
                  floatingLabelText={'Senha'}
                  floatingLabelStyle={fieldTheme.inputColor}
                  inputStyle={fieldTheme.inputColor}
                  value={this.state.password}
                  type={'password'}
                  onChange={this.handlePasswordChange.bind(this)}
                />
                <br />
              </div>
            </MuiThemeProvider>

            <MuiThemeProvider muiTheme={buttonTheme}>
              <div className='buttonRow'>
                <RaisedButton primary={true} label={'Entrar'} style={style} onClick={this.handleLogin.bind(this)}/>
                <Link to='/register'>
                  <RaisedButton label={'Cadastre-se'} style={style} />
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

const style = {
  margin: 8

};

export default LoginForm;