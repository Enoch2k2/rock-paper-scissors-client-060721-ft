import { DONE_REQUESTING, SET_ERRORS } from "../Globals";

export const setHeaders = (token) => {
  const headers = {};
  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";
  if(token) {
    headers["Authorization"] = `Bearer ${token}`
  }

  return headers;
}

export const handleErrors = (dispatch, errors) => {
  dispatch({ type: SET_ERRORS, payload: errors })
  dispatch({ type: DONE_REQUESTING })  
}