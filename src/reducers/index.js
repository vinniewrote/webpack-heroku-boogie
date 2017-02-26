import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import entries from './entries';
import parks from './parks';

const rootReducer = combineReducers({ entries, parks, auth, routing: routerReducer });

export default rootReducer;
