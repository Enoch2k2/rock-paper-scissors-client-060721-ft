import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import requestingReducer from './requestingReducer';
import sessionsReducer from './sessionsReducer';
import subcriptionsReducer from './subscriptionsReducer';


export default combineReducers({
  requesting: requestingReducer,
  sessions: sessionsReducer,
  errors: errorsReducer,
  subscriptions: subcriptionsReducer
})