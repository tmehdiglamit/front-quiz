import React, { Component } from 'react';

class ModelMenu extends Component {

	render() {
    return (
      <div id="modelMenu">
        <ul className="navbarNav">
            <li className="headerLinkMenu" onClick={this.props.closeModelMenu}>X</li>
            <li className="headerLinkMenu">Jeans</li>
            <li className="headerLinkMenu">Remeras</li>
        </ul>
      </div>
    )
	 }
  
}

export default ModelMenu;