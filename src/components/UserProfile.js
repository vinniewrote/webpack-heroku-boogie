import React from 'react';
import ReactRouter from 'react-router';
import { Link } from 'react-router';

class UserProfile extends React.Component {
  render(){
    const {isAuthenticated, profile} = this.props.auth;
    return (
      <div className="container">
        {!isAuthenticated && <button type="button" onClick={this.props.login}>Login</button>}
        {isAuthenticated && <div><button type="button" onClick={this.props.logoutUser}>Log out</button> <h3>Welcome!</h3></div>}
      </div>
    );
  }
}

export default UserProfile;
