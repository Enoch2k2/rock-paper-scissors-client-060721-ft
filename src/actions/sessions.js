import { BASE_URL, DONE_REQUESTING, LOGIN_USER, LOGOUT_USER, REQUESTING, SET_ERRORS } from "../Globals"
import { handleErrors, setHeaders } from "./helpers";

export const signup = (details) => {
  return async dispatch => {
    dispatch({ type: REQUESTING });

    const resp = await fetch(BASE_URL + '/signup', {
      method: "POST",
      headers: setHeaders(),
      body: JSON.stringify(details)
    })

    const data = await resp.json();

    if (data.errors) {
      handleErrors(dispatch, data.errors);
    } else {
      localStorage.setItem('jwt', data.jwt);
      dispatch({ type: LOGIN_USER, payload: data.user })
      dispatch({ type: DONE_REQUESTING })
    }
  }
}

export const login = (details) => {
  return async dispatch => {
    dispatch({ type: REQUESTING });

    const resp = await fetch(BASE_URL + '/login', {
      method: "POST",
      headers: setHeaders(),
      body: JSON.stringify(details)
    })

    const data = await resp.json();

    if(data.errors) {
      handleErrors(dispatch, data.errors);
    } else {
      localStorage.setItem('jwt', data.jwt);
      dispatch({ type: LOGIN_USER, payload: data.user })
      dispatch({ type: DONE_REQUESTING })
    }
  }
}

export const getCurrentUser = (token) => {
  return async dispatch => {
    dispatch({ type: REQUESTING });

    const resp = await fetch(BASE_URL + '/get-current-user', {
      method: "GET",
      headers: setHeaders(token)
    })

    const data = await resp.json();

    if(data.id) {
      dispatch({ type: LOGIN_USER, payload: data })
    }

    dispatch({ type: DONE_REQUESTING })
  }
}

export const logout = () => {
  localStorage.removeItem("jwt");

  return {
    type: LOGOUT_USER
  }
}