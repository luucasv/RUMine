import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Loading from '../components/Loading';
import Home from './Home';
import Buy from './Buy';
import AuthProvider from '../stores/AuthProvider';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      authenticated: AuthProvider.isAuthenticated()
    };
  }

  componentWillMount() {
    AuthProvider.on('change', () => {
      this.setState({
        authenticated: AuthProvider.isAuthenticated()
      });
    });
  }

  componentDidMount() {
    this.setState({
      status: 'running',
    });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          {(this.state.authenticated) ?
            <Switch>
              <Route exact path='/home' render={(props) => <Home {...props} />} />
              <Route exact path='/buy' render={(props) => <Buy {...props} />} />
              <Route render={(props) => <Redirect to='/home' {...props} />} />
            </Switch> :
            <Switch>
              <Route exact path='/' render={(props) => <Login {...props} />} />
              <Route exact path='/register' render={(props) => <Register {...props} />} />
              <Route render={(props) => <Redirect to='/' {...props} />} />
            </Switch>
          }
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(App); 