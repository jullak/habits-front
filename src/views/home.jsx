import React from 'react';
import { connect } from 'react-redux';
import * as regAction from '../actions/authentification';

export class _Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			needRegistration: false,
			nickname: '',
			password: '',
			passwordRepeat: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.registrate = this.registrate.bind(this);
	}

	handleChange(event) {
		if(event.target.name === 'needRegistration') {
			this.setState({...this.state, needRegistration: true});
		} else {
			this.setState({...this.state, [event.target.name]: event.target.value});
		}
	}

	registrate(event) {
		this.props.registrateUser(this.state.nickname, this.state.password);
	}

	render() {
		let loginStatusView = '';

		if(this.props.loginStatus !=='none') {
			if (this.props.loginStatus === 'exists') {
				loginStatusView = <p>К сожалению, данный никнейм уже занят.</p>
			}
			else if (this.props.loginStatus === 'error') {
				loginStatusView = <p>Произошла какая-то ошибка. Попробуйте снова!</p>
			}
			else if (this.props.loginStatus === 'success'){
				loginStatusView = <p>Добро пожаловать, {this.props.currentUser.nickname}!</p>
			}
		}

		return (
		<div>
		<p>Привычки вырабатываются за 21 день</p>
		{this.state.needRegistration ?
			(<div>
				<input type="text" name="nickname" placeholder="Name" value={this.state.nickname} onChange={this.handleChange}>
				</input>
				<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}>
				</input>
				<input type="password" name="passwordRepeat" placeholder="Repeat password" value={this.state.passwordRepeat} onChange={this.handleChange}>
				</input>
				<button onClick={() => this.props.registrateUser(this.state.nickname, this.state.password)}>Зарегестрироваться</button>

			</div>) :
			(<button name='needRegistration' onClick={this.handleChange}>
				Присоединиться!
			</button>)
		}

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
	registrateUser: (nick, pwd) => dispatch(regAction.registrateUser({nick, pwd}))
});

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)