import React, { Component } from 'react';

class Directions extends Component {
  render(){
    return(
      <div>
        <ul className='menu'>
          {this.props.directions.map((item) => {
            if (item === "Watch how to make this recipe.") {
              return ""
            } else {
              return <li className="menu-label">Don't {item}</li>
            }
          })}
        </ul>
      </div>
    );
  }
}

export default Directions;
