/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  FETCHING_SMURFS, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE, ADDSMURF, ADDSMURF_SUCCESS, ADDSMURF_ERROR
} from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: ''
  //  updatingSmurf: false,
  //  deletingSmurf: false,
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ''
      }
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: [...state.smurfs, ...action.payload]
      }
    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case ADDSMURF:
      return {
        ...state,
        addingSmurf: true,
        error: ''
      }
    case ADDSMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload]
      }
    case ADDSMURF_ERROR:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
