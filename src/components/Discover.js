import React from 'react';
import ReactRouter from 'react-router';
import { Link } from 'react-router';
import Navigation from './MttNavigation';
import DiscoverEntry from './DiscoverEntry';

class Discover extends React.Component {
  render(){
    return(
      <div className='bucket'>
        {this.props.entries.map((entry, i) => <DiscoverEntry key={i} i={i} entry={entry}/>)}
      </div>
    );
  }
}

export default Discover;
