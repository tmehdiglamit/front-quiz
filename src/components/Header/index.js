import React, { Component } from 'react';
import SubMenu from './SubMenu';
import './style.scss';


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // modify the state, this will automatically recall render() below.
    this.setState((prevState) => {
      return { animate: !prevState.animate }
    });
  }

  render() {

    let animationClasses = (this.state.animate ? ' active': '');

    return (
      <header>
          <div className="container-nav">
            <i className="fas fa-bars" onClick={this.handleClick}></i>
            <div className="logo-container"><img src={require('../../static/logo.png')}/></div>
            <nav className={`${animationClasses}`} >
              <ul>
                <li className="dropdown-button">
                  <a>Hombre</a> 
                  <SubMenu />
                </li>
                <li className="dropdown-button">
                  <a>Mujer</a> 
                  <SubMenu />
                </li>
                <li>
                  <a href="">Contacto</a> 
                </li>
                <li>
                  <i className="fas fa-search"></i>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Buscar"
                  />
                </li>
              </ul>
            </nav>
          </div>
      </header>
    );
  }
}

export default Header;
