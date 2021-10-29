import { ADD_SUBSCRIPTION, REMOVE_SUBSCRIPTION } from "../Globals"

const initialState = {}

 const subcriptionsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case ADD_SUBSCRIPTION:
    return { ...state, [payload.type]: payload.subscription }
  case REMOVE_SUBSCRIPTION:
    const copyOfState = { ...state };
    copyOfState.delete(payload)
    return copyOfState;
  default:
    return state
  }
}

export default subcriptionsReducer;