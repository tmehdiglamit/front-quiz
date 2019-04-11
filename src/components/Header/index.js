import React, { Component } from 'react';
import PropTypes from 'prop-types';



import { connect } from 'react-redux';

import './style.css';

class Header extends Component {

  constructor (props) {
    super(props)

    this.state = {}
    this.dropdown=this.dropdown.bind(this);
  }

  	   dropdown(e){
	        let classes = 'open';
	        let class_tag = document.getElementsByClassName('open active');
	        if(class_tag){
	            while (class_tag[0]) {
	                class_tag[0].classList.remove('open')
	            }
	        }
	        e.target.className = classes.replace('open','open active');
    	}

	    clickActive = () => {
	    	if(this.state.active){
	    		this.setState({ active: false });
	    	}else{
	    		this.setState({ active: true });
	    	}
		};



  render () {

  	const classes_button = ['button'];
  	const classes_item = [];
  	const classes_nav = ['menu_categorias'];
  	const classes_subcategoria = ['subcategorias'];

  	if (!!this.state.active) {
      classes_button.push('active');
      classes_item.push('active');
      classes_nav.push('active');
      
    }

    return (
      	<header className='header_wrap'>
            <a id="logoHome" href="#" title="home"></a>
            <div className="nav-left visible-xs">
				  <div className={classes_button.join(' ')} id="btn" onClick={() => this.clickActive()}>
					    <div className="bar top"></div>
					    <div className="bar middle"></div>
					    <div className="bar bottom"></div>
				  </div>
			</div>
            <nav className={classes_nav.join(' ')}>
	            	<ul>
	            		<li className={classes_item.join(' ')} onClick={(e) =>this.dropdown(e)} >Hombre
		            		<div className={classes_subcategoria.join(' ')}>
		            			<ul>
		            				<li>Jeans</li>	
		            				<li>Remeras</li>	
		            			</ul>
		            		</div>
	            		</li>
	            		<li  className={classes_item.join(' ')} onClick={(e) =>this.dropdown(e)}>Mujer

	            		<div className={classes_subcategoria.join(' ')}>
	            			<ul>
	            				<li>Jeans</li>	
	            				<li>Remeras</li>	
	            			</ul>
	            		</div>
	            		</li>
	            	</ul>
            </nav>
            <div class="search-wrapper">
			    <div class="input-search">
			        <input type="text" class="search-input" placeholder="Buscar productos..." />
			    </div>
			</div>
        </header>
    )
  }
}

export default Header;

