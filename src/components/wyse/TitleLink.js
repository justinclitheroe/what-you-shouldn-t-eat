import React, { Component } from 'react';

class MobileTitleLink extends Component {

  render(){
    return(
      <div className="has-text-right">
        <h1 className="title is-1">
          You Probably Shouldn't Eat:
        </h1>
        <h1 className="subtitle is-2">
          <a href={this.props.link}>
            {this.props.title}
          </a>
        </h1>
      </div>
    );
  }
}

export default MobileTitleLink;
