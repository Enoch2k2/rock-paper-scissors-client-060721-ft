import { REQUESTING, DONE_REQUESTING } from "../Globals";
const initialState = true;

const requestingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUESTING:
      return true;
    case DONE_REQUESTING:
      return false;
    default:
      return state
  }
}

export default requestingReducer;