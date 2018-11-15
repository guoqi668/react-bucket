import { createStore,combineReducers } from 'redux';
import userInfo from './reducer/userInfo'
const todoApp = combineReducers(
    {
        userInfo
    }
)
const store = createStore(todoApp)
 export default store