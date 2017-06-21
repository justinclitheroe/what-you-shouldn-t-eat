import React, { Component } from 'react';

class Ingredients extends Component {
  render(){
    console.log(this.props.ingredients)

    return(
      <div>
        <ul className='menu'>
          {/* {this.props.ingredients.map((item) => {
            return <li className="menu-label">{item}</li>
          })} */}
        </ul>
      </div>
    );
  }
}

export default Ingredients;
