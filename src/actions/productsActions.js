import axios from 'axios';
import * as types from './actionTypes';
import {PRODUCTS_URL} from "../config";
import {spinnerService} from '@chevtek/react-spinners';

const getProductsSuccess = (data) => {
  return {
    type: types.GET_PRODUCTS,
    data: data.data
  };
};

export const getProducts = () => {
  return function (dispatch) {
    spinnerService.show('mySpinner');
    return axios.get(PRODUCTS_URL).then((data) => {
      dispatch(getProductsSuccess(data));
      spinnerService.hide('mySpinner');
    }).catch(error => {
      spinnerService.hide('mySpinner');
      throw(error);
    });
  };
};
