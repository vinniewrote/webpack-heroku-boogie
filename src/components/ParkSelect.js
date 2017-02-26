import React from 'react';
import {Link} from 'react-router';

const ParkSelect = React.createClass({
  render() {
    const {entry, i, park} = this.props;
    return (
      <div className="park-select">
      <button>
      <Link to={`/parks/${park.parkId}`}>
        <h3>{park.parkName}</h3>
        <p>{park.parkCity}, {park.parkState} {park.parkCountry}</p>
        </Link>
      </button>
      </div>
    )
  }
});

export default ParkSelect;
