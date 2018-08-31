import TodoReducer from './TodoReducer';
import NavigationReducer from './NavigationReducer';

import {combineReducers} from 'redux';

export default combineReducers({
  "activeTodo": NavigationReducer,
  "todos": TodoReducer
});