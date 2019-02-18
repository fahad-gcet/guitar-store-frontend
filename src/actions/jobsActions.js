import * as types from './actionTypes';


export function deleteJob(id) {
  return {
    type: types.DELETE_JOB,
    data: id
  };
}

export function editJob(id, newValue) {
  return {
    type: types.EDIT_JOB,
    data: {
      id: id,
      newValue: newValue
    }
  };
}

