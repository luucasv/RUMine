import { baseURL } from './Constants';

class API {

  constructor() {
    this.authenticate.bind(this);
  }

  authenticate = async (username, password) => {
    let ans = await fetch(baseURL + '/users/auth', {
      headers: new Headers({ 'Content-Type': 'application/json' }),
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      })
    });
    let ansJson = await ans.json();
    console.log(ansJson);
    return ansJson;
  }

  register = async (username, password, email, cpf) => {
    let ans = await fetch(baseURL + '/users/register', {
      headers: new Headers({ 'Content-Type': 'application/json' }),
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        email,
        cpf
      })
    });
    let ansJson = await ans.json();
    console.log(ansJson);
    return ansJson;
  }

  getInfo = async (token) => {
    let ans = await fetch(baseURL + '/users/info', {
      headers: new Headers({'x-access-token': token }),
      method: 'GET'
    })
    let ansJson = await ans.json();
    console.log(ansJson);
    return ansJson;
  }

  getQueueSize = async () => {
    let ans = await fetch(baseURL + '/queue_size/latest', {
      method: 'GET'
    })
    let ansJson = await ans.json();
    console.log(ansJson);
    return ansJson;
  }
}

let api = new API();
window.API = api;
export default api;