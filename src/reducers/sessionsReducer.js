import { LOGIN_USER, LOGOUT_USER } from "../Globals";

const initialState = {
  currentUser: {},
  loggedIn: false
}

const sessionsReducer =  (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        currentUser: payload,
        loggedIn: true
      }
    case LOGOUT_USER:
      return initialState;
    default:
      return state
  }
}

export default sessionsReducer;