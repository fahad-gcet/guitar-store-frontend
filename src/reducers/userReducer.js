import initialState from './initialState';
import * as types from "../actions/actionTypes";

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.INITIATE_AUTH:
      return state;
    case types.FINALIZE_AUTH:
      return state;
    default:
      return state;
  }
}
