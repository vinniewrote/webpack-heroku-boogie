import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import App from './components/app'
import './styles/styles.scss'

import 'babel-polyfill';

import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import store, { history } from './store';

// app container
import Main from './components/Main';
import Layout from './components/Layout';
import Discover from './components/Discover';
import ThemeParks from './components/ThemeParks';
import Journal from './components/Journal';
import Details from './components/Details';
import UserProfile from './components/UserProfile';
// render app
ReactDOM.render(
  <Provider store={store}>
			<Router history={history}>
				<Route path='/' component={Layout}>
					<IndexRoute component={Discover}></IndexRoute>
					<Route path='/discover' component={Discover}></Route>
					<Route path='/parks' component={ThemeParks}></Route>
					<Route path='/parks/:parkId' component={Details}></Route>
					<Route path='/journal' component={Journal}></Route>
					<Route path='/profile' component={UserProfile}></Route>
		    </Route>
			</Router>
	</Provider>, document.getElementById('parkEntrance')
);
