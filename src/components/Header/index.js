
import React, { Component } from 'react';
import './style.scss';
import ModelMenu from "./ModelMenu"

const logo = require('./logo_1.png');

class Header extends Component {
    constructor(props) {
    super(props);
    this.openModelMenu = this.openModelMenu.bind(this);
    this.closeModelMenu = this.closeModelMenu.bind(this);
    this.state = {
      modelMenuOpen: false,
    }
  }


  openModelMenu () {

    this.setState({
    modelMenuOpen:true,
  })

  }

  closeModelMenu () {
    this.setState({
    modelMenuOpen:false,

    })
  }

  render() {
    let showingMenu;
    if(this.state.modelMenuOpen === true){
       showingMenu = <ModelMenu closeModelMenu={this.closeModelMenu}/>
    }
    return (  
      <header>
        <nav className="colMenu">
          <div className="logoHeader">
              <a href="http://www.levi.com.ar" target="_blank" rel="noopener noreferrer"><img className="imgLogo img-responsive" src={logo} alt="logo" /></a>
            </div>
          <ul className="navbarNav">
            <li className="headerLink" onMouseOver={this.openModelMenu}>HOMBRE</li>
            <li className="headerLink" onMouseOver={this.openModelMenu}>MUJER</li>
            <li className="headerLink"><a href="http://www.levi.com.ar" target="_blank" rel="noopener noreferrer">CONTACTO</a></li>
          </ul>
        </nav>
        {showingMenu}
      </header>

  );
  }
}

export default Header;