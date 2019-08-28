import React, { Component } from 'react';
class Header extends React.Component {
render() {
    return (
      <div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" />
        <script src="js/scripts.js" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css" />
        <header>
          <nav role="navigation">
            <ul>
              <li>
                <a href="/">
                  <div>
                    LOGO
                  </div>
                </a>
              </li>
              <li class="width100">
              </li>
              <li>
                <a href="#">
                  <div>
                    Hombre
                    <span>Clase y estilo</span>
                  </div>
                </a><div>
                  <ul>
                    <li><a href="#">Jeans</a></li>
                    <li><a href="#">Remeras</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">
                  <div>
                    Mujer
                    <span>Todo el glamour</span>
                  </div>
                </a><div>
                  <ul>
                    <li><a href="#">Jeans</a></li>
                    <li><a href="#">Remeras</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">
                  <div>
                    Contacto
                  </div>
                </a>
              </li><li>
                  <div>
                    <input class="buscador" placeholder="Buscar..." />
                  </div>
              </li>
            </ul>
          </nav>
        </header>
      </div>

    )
  }
}
export default Header;
