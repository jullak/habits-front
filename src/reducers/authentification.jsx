import {REGISTRATION_USER, REGISTRATION_ERROR, LOGIN_USER, LOGIN_USER_ERROR} from '../actions/authentification';

export const authReducer = (state= {}, action) => {
	switch (action.type) {
		case REGISTRATION_USER:
			return {...state, ...action.payload};
		case REGISTRATION_ERROR:
			return {...state, loginStatus: 'error'};
		case LOGIN_USER:
			return {...state, ...action.payload, loginStatus: action.payload.loginResult === 'success' ? 'success' : 'no match'};
		case LOGIN_USER_ERROR:
			return {...state, loginStatus: 'error'};
		default:
			return state;
	}		
};