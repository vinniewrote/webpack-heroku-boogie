import React from 'react';
import ReactRouter from 'react-router';
import { Link } from 'react-router';
import Navigation from './MttNavigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import DiscoverEntry from './DiscoverEntry';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.props.doAuthentication();
  }
  componentWillMount() {}
  componentWillUnmount() {}

  render(){
    return(
      <div className='mttLayout'>
          {React.cloneElement(this.props.children, this.props)}
        <Navigation />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    entries: state.entries,
    parks: state.parks
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(Layout);
