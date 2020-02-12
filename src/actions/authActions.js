import {ACTION_TYPES} from '../types/actionTypes';
import axios from 'axios';
import {API} from '../constants/api';
export function authActions({type, payload}) {
  switch (type) {
    case ACTION_TYPES.SIGN_IN_ACTION: {
      // chain promises
      return axios({
        type: 'post',
        url: API + '/signin/',
        data: payload,
      })
        .then(function({data}) {
          return data;
        })
        .catch(function(err) {
          //network error or server error
          return err.response + err;
        });
      break;
    }
    default:
      return new Promise.reject('null');
      break;
  }
}
