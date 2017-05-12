import { clientId, domain, config } from '../keys';
import Auth0Lock from 'auth0-lock';
import Rebase from 're-base';

export const SHOW_LOCK = 'SHOW_LOCK'
export const LOCK_SUCCESS = 'LOCK_SUCCESS'
export const LOCK_ERROR = 'LOCK_ERROR'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

const base = Rebase.createClass(config);

//fetch journal entries from firebase
// export function fetchEntry(){
//   console.log(base);
//   base.fetch('entries', {
//     context: this,
//     asObject: true
//   }).then(data => {
//     console.log(data);
//   }).catch(error => {
//     //handle error
//   })
// }
//add journal entry
function addEntry(postId, details, i){
  return {
    type: 'ADD_ENTRY',
    postId,
    details,
    i
  }
}

//set journal entry as a draft
function setDraft(postId, i){
  return {
    type: 'SET_DRAFT',
    postId,
    i
  }
}

//edit journal draft
function editDraft(postId, i){
  return {
    type: 'EDIT_DRAFT',
    postId,
    i
  }
}

//remove journal entry
function removeEntry(postId, details, i){
  return {
    type: 'REMOVE_ENTRY',
    postId,
    details,
    i
  }
}

//log rides
function logRide(index) {
  return {
    type: 'LOG_RIDE',
    index
  }
}

//remove logged rides
function removeRide(index){
  return {
    type: 'REMOVE_RIDE',
    index
  }
}

//increment logged ride
function incrementride(index) {
  return {
    type: 'INCREMENT_RIDE',
    index
  }
}
//de-increment logged rides
function decrementride(index) {
  return {
    type: 'DECREMENT_RIDE',
    index
  }
}

function showLock() {
  return {
    type: SHOW_LOCK
  }
}

function lockSuccess(profile, token) {
  return {
    type: LOCK_SUCCESS,
    profile,
    token
  }
}

function lockError(err) {
  return {
    type: LOCK_ERROR,
    err
  }
}

const lock = new Auth0Lock(clientId, domain);

export function login() {
  // display lock widget
  return dispatch => {
    lock.show();
  }
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    dispatch(receiveLogout())
  }
}

// Listen to authenticated event and get the profile of the user
export function doAuthentication() {
    return dispatch => {
      lock.on("authenticated", function(authResult) {
            lock.getProfile(authResult.idToken, function(error, profile) {

              if (error) {
                // handle error
                return dispatch(lockError(error))
              }

              localStorage.setItem('profile', JSON.stringify(profile))
              localStorage.setItem('id_token', authResult.idToken)
              return dispatch(lockSuccess(profile, authResult.idToken))
            });
      });
    }
}
