import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory, hashHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/index';

import entries from './data/entries';
import parks from './data/parkList';

const initialState = {
	entries,
	parks
};

const enhancers = compose(
	applyMiddleware(thunkMiddleware),
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, initialState, enhancers);
export const history = syncHistoryWithStore(hashHistory, store);

export default store;
