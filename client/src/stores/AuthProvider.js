import { EventEmitter } from 'events';
import API from '../lib/API';
import { setTimeout } from 'timers';

class AuthProvider extends EventEmitter {
  constructor() {
    super();
    this.username = null;
    this.password = null;
    this.token = null;
    this.balance = null;
    this.email = null;
    this.queue_info = null;
    this.authenticate.bind(this);
    this.updateQueueInfo.bind(this);
    this.updateQueueInfo();
    setTimeout(this.updateQueueInfo, 60 * 1000);
  }

  getToken() {
    return this.token;
  }

  getUsername() {
    return this.username;
  }

  getEmail() {
    return this.email;
  }

  getBalance() {
    return this.balance;
  }

  getQueueInfo() {
    return this.queue_info;
  }

  authenticate = async (username, password) => {
    let ans = await API.authenticate(username, password);
    if (ans.success) {
      let info = await API.getInfo(ans.token);

      this.username = username;
      this.password = password;
      this.token = ans.token;
      this.email = info.info.email;
      this.balance = info.info.balance;
      this.emit('change');
    }
    return ans;
  }

  register = async (username, password, email, cpf) => {
    let ans = await API.register(username, password, email, cpf);
    if (ans.success) {
      this.authenticate(username, password);
    }
    return ans;
  }

  updateQueueInfo = async () => {
    let ans = await API.getQueueSize();
    if (ans.success) {
      if (!this.queue_info || ans.latest_size.time != this.queue_info.time) {
        this.queue_info = ans.latest_size;
        this.emit("change");
      }
    }

  }

  isAuthenticated() {
    return this.token != null;
  }
}

const authProvider = new AuthProvider();

export default authProvider;