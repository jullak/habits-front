import React from 'react';
import * as regAction from '../actions/authentification';
import {connect} from "react-redux";

export class _LogIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nickname: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({...this.state, [event.target.name]: event.target.value});
	}

	render() {
		let loginStatusView = '';
		if (this.props.currentUser.loginStatus === 'success') {
			loginStatusView = <p>Успешно! Перейдите на вкладку 'Main'</p>;
		} else if (this.props.currentUser.loginStatus === 'no match') {
			loginStatusView = <p>Неверный никнейм или пароль</p>;
		} else if (this.props.currentUser.loginStatus === 'error') {
			loginStatusView = <p>Произошла какая-то ошибка</p>;
		}
		return (
		<div>
			<input type="text" name="nickname" placeholder="Name" value={this.state.nickname} onChange={this.handleChange}>
			</input>
			<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}>
			</input>
			<button onClick={() => this.props.loginUser(this.state.nickname, this.state.password)}>Вернуться</button>

			{loginStatusView}
		</div>
		)
	}
};

const mapStateToProps = (state) => ({
	loginStatus: state.currentUser.loginStatus,
	currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
	loginUser: (nick, pwd) => dispatch(regAction.loginUser({nick, pwd}))
});

export const LogIn = connect(mapStateToProps, mapDispatchToProps)(_LogIn)