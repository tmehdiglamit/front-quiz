import React, { Component } from 'react';
import './style.scss';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="dropdown">
          <button className="dropbtn">Hombre</button>
          <div className="dropdown-content">
            <a href="#">Jeans</a>
            <a href="#">Remeras</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Mujer</button>
          <div className="dropdown-content">
            <a href="#">Jeans</a>
            <a href="#">Remeras</a>
          </div>
        </div>
        <input className="form-control" placeholder="Contacto"></input>
      </nav>
    );
  }
}

export default Navbar;
