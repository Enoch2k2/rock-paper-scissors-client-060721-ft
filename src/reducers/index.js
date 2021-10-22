import { combineReducers } from 'redux';
import requestingReducer from './requestingReducer';
import sessionsReducer from './sessions';


export default combineReducers({
  requesting: requestingReducer,
  sessions: sessionsReducer
})