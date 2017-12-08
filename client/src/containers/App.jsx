import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Loading from '../components/Loading';
import Home from './Home';
import Buy from './Buy';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'loading'
    };
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
          {(this.state.status === 'loading') ?
            <Loading /> :
            <Switch>
              <Route exact path='/' render={(props) => <Login {...props} />} />
              <Route exact path='/register' render={(props) => <Register {...props} />} />
              <Route exact path='/home' render={(props) => <Home {...props} />} />
              <Route exact path='/buy'  render={(props) => <Buy {...props} />} />]
            </Switch>
          }
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(App); 