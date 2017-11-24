import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import { Link, withRouter } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      showDialog: false,
    }
  }

  closeDialog() {
    this.setState({
      showDialog: false,
    });
  }

  render() {
    return (
     <div>
       <LoginForm />
       <Dialog
         modal={false}
         open={this.state.showDialog}
         onRequestClose={this.closeDialog.bind(this)}
       >
        {"Login ou senha incorretos!"}
      </Dialog>
     </div>
    );
  }
}

export default withRouter(Login);