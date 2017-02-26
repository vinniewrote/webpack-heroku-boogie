import React from 'react';
import ReactRouter from 'react-router';
import { Link } from 'react-router';

class MttNavigation extends React.Component {
  render() {
    return(
      <nav>
        <Link to='/discover' className=''><button>Discover</button></Link>
        <Link to='/parks' className=''><button>Parks</button></Link>
        <Link to='/journal' className=''><button>Journal</button></Link>
        <Link to='/profile' className=''><button>Profile</button></Link>
      </nav>
    );
  }
}

export default MttNavigation;
