import React, { Component } from 'react';


// timeToCook={this.state.recipe.timeToCook}
// timeToCookActive={this.state.recipe.timeToCookActive}
// yield={this.state.recipe.yield}
// experienceRequired={this.state.recipe.experienceRequired}

//annoying formatting stuff


class Meta extends Component {
  render(){
    return(
      <nav className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Time To Cook</p>
            <p className="title">{this.props.timeToCook}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Active Time</p>
            <p className="title">{this.props.timeToCookActive}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Yield</p>
            <p className="title">{this.props.yield}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Difficulty</p>
            <p className="title">{this.props.experienceRequired}</p>
          </div>
        </div>
      </nav>
    );
  }
}

export default Meta;
