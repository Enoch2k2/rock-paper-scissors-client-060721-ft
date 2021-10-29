import { LOGIN_USER, LOGOUT_USER, ADD_USERS } from "../Globals";

const initialState = {
  currentUser: {},
  users: [],
  loggedIn: false
}

const sessionsReducer =  (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        currentUser: payload,
        loggedIn: true
      }
    case ADD_USERS:
      return {
        ...state,
        users: payload
      }
    case LOGOUT_USER:
      return initialState;
    default:
      return state
  }
}

export default sessionsReducer;