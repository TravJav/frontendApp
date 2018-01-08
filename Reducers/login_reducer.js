import Login from '../Screens/Login';
import { combineReducers } from 'redux';

export default (state, action) =>{
    switch(action.type){
        case 'TOKEN':
        return [...state, {id: action.token, authorized: false}];
        default:
        return state;
    }
}