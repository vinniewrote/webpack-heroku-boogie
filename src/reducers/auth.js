import {
  SHOW_LOCK, LOCK_SUCCESS, LOCK_ERROR,LOGOUT_SUCCESS,LOGOUT_REQUEST
} from '../actions/actionCreators'


// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
  }, action) {
  switch (action.type) {
    case SHOW_LOCK:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
		profile: {},
		token: ''
      })
    case LOCK_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
		profile: action.profile,
		token: action.token
      })
    case LOCK_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
		profile: {},
		token: ''
      })
	case LOGOUT_REQUEST:
	  return Object.assign({}, state, {
 	   isFetching: true,
 	   isAuthenticated: true,
	   profile: {},
	   token: ''
 	 })
	 case LOGOUT_SUCCESS:
	   return Object.assign({}, state, {
		isFetching: false,
		isAuthenticated: false,
		profile: {},
		token: ''
	  })
    default:
      return state
  }
}

export default auth;
