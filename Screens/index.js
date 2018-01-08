import {combineReducers} from 'redux';
import screen_reducer from './screens_reducer';

const allReducers = combineReducers({
userSession: screen_reducer

});