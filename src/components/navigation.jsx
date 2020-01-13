import React from 'react';
import {STRUCTURE} from '../constants/structure';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";

function _Navigation(props) {

	if(props.loginStatus !== 'success') {
		return (
			<div>
				<NavLink
					to={STRUCTURE.home.route}
					exact={true}>
					{STRUCTURE.home.title}
				</NavLink>
				<NavLink
					to={STRUCTURE.login.route}
					exact={true}>
					{STRUCTURE.login.title}
				</NavLink>
			</div>
		)
	} else {
		return (
			<div>
				<NavLink
					to={STRUCTURE.main.route}
					exact={true}>
					{STRUCTURE.main.title}
				</NavLink>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	loginStatus: state.currentUser.loginStatus
});

export const Navigation = connect(mapStateToProps)(_Navigation);