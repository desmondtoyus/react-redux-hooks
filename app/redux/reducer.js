import { userReducer } from './reducers/index';
import { combineReducers} from 'redux';

export default combineReducers({
  user:userReducer,
});
