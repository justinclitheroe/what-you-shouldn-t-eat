import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <nav className="nav has-shadow is-hidden-mobile">
        <section className="container">
          <div className="nav-left">
            <a className="nav-item">
              <img src={this.props.logo} alt="logo" />
            </a>
          </div>
          <div className="nav-center">
            <a href={this.props.link} className="nav-item">
              {this.props.title}
            </a>
          </div>
          <div className="nav-right">
            <div className="nav-item">
              <span className="icon">
                <i className="fa fa-github"></i>
              </span>
            </div>
          </div>
        </section>
      </nav>
    );
  }
}

export default Header;
