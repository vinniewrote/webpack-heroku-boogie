import React from 'react';
import ReactRouter from 'react-router';
import { Link } from 'react-router';
import Navigation from './MttNavigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import DiscoverEntry from './DiscoverEntry';
import { config } from '../keys';
import Rebase from 're-base';

const base = Rebase.createClass(config);

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.props.doAuthentication();
  }
  componentWillMount() {}
  componentWillUnmount() {}

  componentDidMount() {
    console.log("fetching firebase");
    // this.props.fetchEntry();
    base.fetch('entries', {
    context: this,
    asArray: true,
    then(data){
      console.log(data);
      console.log(data[0].entryDate);
    }
  });
  }

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
