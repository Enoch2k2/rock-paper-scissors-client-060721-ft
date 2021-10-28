import { CLEAR_ERRORS, SET_ERRORS } from "../Globals";

const initialState = [];

const errorsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ERRORS:
      return payload;
    case CLEAR_ERRORS:
      return initialState;
    default:
      return state
  }
}

export default errorsReducer;