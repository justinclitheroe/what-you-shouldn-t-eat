import React, { Component } from 'react';

class GImage extends Component {

  render(){
    return(
      <div className="card-image">
        <figure className="image">
          <img src={this.props.imageLink} alt="recipe" />
        </figure>
      </div>
    );
  }
}

export default GImage;
