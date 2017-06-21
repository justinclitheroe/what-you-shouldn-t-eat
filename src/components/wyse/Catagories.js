import React, { Component } from 'react';

class Catagories extends Component {
  render(){
    return(
      <div> Catagories:
        {this.props.catagories.map((item) => {
          return <span className="tag is-primary">{item}</span>
        })}
      </div>
    );
  }
}

export default Catagories;
