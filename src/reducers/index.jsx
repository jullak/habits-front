import { combineReducers } from 'redux';
import {authReducer} from './authentification';
import {skillReducer} from "./skill";
import {goalReducer} from './goal'

export default combineReducers({
	currentUser: authReducer,
	skillsList: skillReducer,
	goalsList: goalReducer
});