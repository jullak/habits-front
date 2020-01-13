import * as path from '../constants/path';
import axios from 'axios';

export const REGISTRATION_USER = 'REGISTRATION_USER';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

export const AUTO_AUTH = 'AUTO_AUTH';
export const AUTO_AUTH_ERROR = 'AUTO_AUTH_ERROR';

export const registrateUser = ({ nick, pwd }) => {
  return dispatch => {
    let param = new URLSearchParams();
	param.append('nickname', nick);
	param.append('password', pwd);

	const uri = path.mainHost + path.registrationPath;

    axios({
    	method: 'post',
    	url: uri,
    	data: param
    }).then(res => {
        dispatch(registrateUserSuccess(res.data));
      })
      .catch(err => {
        dispatch(registrateError(err.message));
      });
  };
};

export const registrateUserSuccess = (data) => ({
	type: REGISTRATION_USER,
	payload: data
});

export const registrateError = (err) => ({
	type: REGISTRATION_ERROR,
	payload: err
});

export const loginUser = ({ nick, pwd }) => {
	return dispatch => {
		let param = new URLSearchParams();
		param.append('nickname', nick);
		param.append('password', pwd);

		const uri = path.mainHost + path.loginPath;

		axios({
			method: 'post',
			url: uri,
			data: param
		}).then(res => {
			dispatch(loginUserSuccess(res.data));
		})
			.catch(err => {
				dispatch(loginError(err.message));
			});
	};
};

export const loginUserSuccess = (data) => ({
	type: LOGIN_USER,
	payload: data
});

export const loginError = (err) => ({
	type: LOGIN_USER,
	payload: err
})