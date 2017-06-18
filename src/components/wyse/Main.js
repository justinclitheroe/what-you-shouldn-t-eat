import React, { Component } from 'react';

//Component Imports
import Catagories  from './Catagories';
import Directions  from './Directions';
import GImage      from './GImage';
import Header      from './Header';
import TitleLink      from './TitleLink';
import Ingredients from './Ingredients';
import Meta        from './Meta';

class Main extends Component {

  componentWillMount() {
    fetch('/recipes/5941f49cc118ae494b851e6c')
      .then((res) => {
        return res.json().then((json) => {
          this.setState({
            recipe: json
          })
        })
      })
  }

  render(){
    if(!this.state){
      return null
    }

    return(
      <div>
        <Header
          logo={this.props.logo}
        />
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <div className="card">
                <GImage
                  imageLink={this.state.recipe.imageLink}
                />
                <Ingredients
                  ingredients={this.state.recipe.ingredients}
                />
              </div>
            </div>
            <div className="column">
              <TitleLink
                title={this.state.recipe.title}
                link={this.state.recipe.link}
              />
              <Meta
                timeToCook={this.state.recipe.timeToCook}
                timeToCookActive={this.state.recipe.timeToCookactive}
                yield={this.state.recipe.yield}
                experienceRequired={this.state.recipe.experienceRequired}
              />
              <Directions
                directions={this.state.recipe.directions}
              />
              <Catagories
                catagories={this.state.recipe.catagories}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
