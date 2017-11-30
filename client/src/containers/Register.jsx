import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import { Redirect, withRouter } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';

class Register extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RegisterForm />
      </div>
     );
  }
}

export default withRouter(Register);