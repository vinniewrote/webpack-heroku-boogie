import React from 'react';
import { Link } from 'react-router';

// class ThemeParks extends React.Component {
//   render () {
//     const {entry, i, park} = this.props;
//     console.log()
//     return (
//       <div className='bucket'>
//         <p>{park.parkOpenYear}</p>
//         <p>{park.parkTheme}</p>
//         <p>{park.parkDesigner}</p>
//       </div>
//     );
//   }
// }

// const ThemeParks = ({params}) => {console.log(params)
// return(
//   <div>Hello</div>
// )}


const ThemeParks = React.createClass({
  render() {
    const {landmarks} = this.props;
    return (
        <div className='landmark' data-landmarktype={landmarks.landmarkType}>
            {landmarks.coasterName}
            {landmarks.restaurantName}
            {landmarks.attractionName}
            {landmarks.shopName}
          <button>+</button>
        </div>
    )
  }
});

export default ThemeParks;
