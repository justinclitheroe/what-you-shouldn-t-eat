import React, { Component } from 'react';

class Ingredients extends Component {
  render(){
    console.log(this.props.ingredients)

    // try {
    //   const ingredients = this.props.ingredients.map((ingredient) => {
    //     <li class="bed">ingredient</li>
    //   })
    // } catch(e) {
    //   console.error(e);
    // }

    return(
      <div>
        <ul>

        </ul>
      </div>
    );
  }
}

export default Ingredients;
