import axios from 'axios';
import { baseURL } from './Constants';

class AuthProvider {
  
  constructor() {
    this.login = this.login.bind(this);
  }

  login = async (username, password) => {
    return await fetch('http://google.com', {
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'include',
      method: 'POST',
      // body: {
      //   username,
      //   password
      // }
    });
  }
}

export default (new AuthProvider());