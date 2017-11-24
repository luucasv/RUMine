import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AuthProvider from '../lib/AuthProvider';
import Colors from 'material-ui/styles/colors'

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
      <MuiThemeProvider>
        <Form>
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

          <div>
            <RaisedButton ra label={'Primary'} primary={true} label={'Entrar'} style={style} onClick={this.handleLogin.bind(this)}/>
            <Link to='/register'>
              <RaisedButton label={'Cadastre-se'} style={style} />
            </Link>
          </div>
        </Form>
      </MuiThemeProvider>
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