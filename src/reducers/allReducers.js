import { combineReducers } from 'redux';
import addTodoReducer from './addTodoReducer';

const allReducers = combineReducers({
    newTodos: addTodoReducer,
})

export default allReducers;