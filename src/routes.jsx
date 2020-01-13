import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import {STRUCTURE} from './constants/structure';
import {Home} from './views/home';
import {LogIn} from './views/login';
import {Main} from "./views/main";

const MainRouter = () => (
	<Switch>
		<Route exact path='/' component={Home}/>
		<Route path={STRUCTURE.login.route} component={LogIn}/>
		<Route path={STRUCTURE.main.route} component={Main}/>

	</Switch>	
);

export default withRouter(MainRouter);