import initialState from './initialState';
import * as types from "../actions/actionTypes";

export default function jobsReducer(state = initialState.jobs, action) {
  switch (action.type) {
    case types.DELETE_JOB:
      const newState = Object.assign([], state);
      const indexOfJobToDelete = state.findIndex(job => {
        return job.id == action.data
      });
      if (indexOfJobToDelete !== -1) {
        newState.splice(indexOfJobToDelete, 1);
      }
      return newState;
    case types.EDIT_JOB:
      const newEditedState = [ ...state ];
      const editedId = action.data.id;
      const newValue = action.data.newValue;
      const indexOfJobToEdit = state.findIndex(job => {
        return job.id == editedId
      });
      if (indexOfJobToEdit !== -1) {
        newEditedState[indexOfJobToEdit] = { id: parseInt(editedId), name: newValue}
      }
      return newEditedState;
    default:
      return state;
  }
}
