import React, { Component } from 'react';


class SubMenu extends Component {
  render() {
    return (
      <ul className="nav-submenu">
        <li className="nav-submenu-item ">
          <a>Jean</a>
        </li>
        <li className="nav-submenu-item ">
          <a>Remeras</a>
        </li>
      </ul>
    );
  }
}

export default SubMenu;
