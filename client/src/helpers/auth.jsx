import axios from 'axios';
import config from '../../../config'

const serverUrl = config.apiServer;
let isLoggedIn = false;
let token = null;
let userid = null;


const auth = {
  serverUrl: serverUrl,

  login: (responseData) => {
    console.log('YOU ARE LOGGED IN');
    token = responseData.token;
    userid = responseData.userid;
    isLoggedIn = true;
    axios.defaults.headers.common.token = token;
    axios.defaults.headers.common.userid = userid;
  },

  logout: () => {
    console.log('YOU JUST LOGGED OUT');
    token = null;
    userid = null;
    isLoggedIn = false;
    delete axios.defaults.headers.common.token;
    delete axios.defaults.headers.common.userid;
  },
};
export default auth;
