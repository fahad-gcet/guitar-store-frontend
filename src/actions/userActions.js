import axios from 'axios';
import * as types from './actionTypes';
import {INITIATE_AUTH_URL, FINALIZE_AUTH_URL, PRODUCTS_URL} from "../config";
import {spinnerService} from '@chevtek/react-spinners';

const initiateAuthSuccess = (data) => {
  return {
    type: types.INITIATE_AUTH,
    data: data.data
  };
};

export const initiateAuth = (customerID) => {
  return function (dispatch) {
    spinnerService.show('mySpinner');
    return axios.get(INITIATE_AUTH_URL).then((data) => {
      dispatch(initiateAuthSuccess(data));
      spinnerService.hide('mySpinner');
    }).catch(error => {
      spinnerService.hide('mySpinner');
      throw(error);
    });
  };
};

const finalizeAuthSuccess = (data) => {
  return {
    type: types.FINALIZE_AUTH,
    data: data.data
  };
};

export const finalizeAuth = () => {
  return function (dispatch) {
    spinnerService.show('mySpinner');
    return axios.get(FINALIZE_AUTH_URL).then((data) => {
      dispatch(finalizeAuthSuccess(data));
      spinnerService.hide('mySpinner');
    }).catch(error => {
      spinnerService.hide('mySpinner');
      throw(error);
    });
  };
};
