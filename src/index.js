import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';

import MainRouter from './routes';
import {BrowserRouter} from 'react-router-dom';
import {Navigation} from './components/navigation';
import reducer from './reducers';

const initialStore = {
	currentUser: {
		loginStatus: 'none'
	},
	skillsList: [],
	goalsList: []
};
export const store = createStore(reducer, initialStore, applyMiddleware(thunk));

const render = () => ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Navigation/>
				<MainRouter/>
			</div>
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);

store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
