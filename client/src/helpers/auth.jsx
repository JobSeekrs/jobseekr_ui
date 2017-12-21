import axios from 'axios';
// import jwtDecode from 'jwt-decode';
import config from '../../../config'

// const headers = axios.defaults.headers.common;
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

  // get: (endpoint, callback) => {
  //   console.log('ABOUT TO GET', endpoint)
  //   axios({
  //     method: 'get',
  //     url: `${serverUrl}${endpoint}`,
  //     headers: {
  //       token: token,
  //       userid: userId
  //     },
  //   })
  //   .then(res => {
  //     console.log('RESPONSE OK')
  //     callback(null, res); 
  //   })
  //   .catch(err => {
  //     console.log('RESPONSE ERROR', err)
  //     callback(err, null);
  //   });
  // },
  // post: (endpoint, data, callback) => {
  //   console.log('ABOUT TO POST', endpoint)
  //   axios({
  //     method: 'post',
  //     url: `${serverUrl}${endpoint}`,
  //     headers: {
  //       token: token,
  //       userid: userId
  //     },
  //     data: data,
  //   })
  //   .then(res => {
  //     console.log('RESPONSE OK')
  //     callback(null, res); 
  //   })
  //   .catch(err => {
  //     console.log('RESPONSE ERROR', err)
  //     callback(err, null);
  //   });
  // },
  // put: (endpoint, data, callback) => {
  //   console.log('ABOUT TO PUT', endpoint)
  //   axios({
  //     method: 'put',
  //     url: `${serverUrl}${endpoint}`,
  //     headers: {
  //       token: token,
  //       userid: userId
  //     },
  //     data: data,
  //   })
  //   .then(res => {
  //     console.log('RESPONSE OK')
  //     callback(null, res); 
  //   })
  //   .catch(err => {
  //     console.log('RESPONSE ERROR', err)
  //     callback(err, null);
  //   });
  // },
  // delete: (endpoint, data) => {

  // },