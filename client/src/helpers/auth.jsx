import axios from 'axios';
import config from '../../../config';

const storage = sessionStorage;

const auth = {
  serverUrl: config.apiServer,

  refresh: () => {
    axios.defaults.headers.common.token = storage.getItem('token');
    axios.defaults.headers.common.userid = storage.getItem('userid');
  },

  login: (serverLoginResponse) => {
    storage.setItem('token', serverLoginResponse.token);
    storage.setItem('userid', serverLoginResponse.userid);
    axios.defaults.headers.common.token = serverLoginResponse.token;
    axios.defaults.headers.common.userid = serverLoginResponse.userid;
    console.log('YOU ARE LOGGED IN');
  },

  logout: () => {
    storage.removeItem('token');
    storage.removeItem('userid');
    delete axios.defaults.headers.common.token;
    delete axios.defaults.headers.common.userid;
    console.log('YOU ARE LOGGED OUT');
  },
};
export default auth;
