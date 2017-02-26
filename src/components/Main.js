import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactRouter from 'react-router';
import { Router, Route, hashHistory } from 'react-router';
import { Link } from 'react-router';
import UserProfile from './UserProfile';
import Layout from './Layout';
import Navigation from './MttNavigation';
import Discover from './Discover';
import ThemeParks from './ThemeParks';
import Journal from './Journal';
import Details from './Details';
import { Provider } from 'react-redux';
import store, { history } from '../store';

class Main extends React.Component {
	render(){
		return (

<p>Hola</p>
		);
	}
}

export default Main;
