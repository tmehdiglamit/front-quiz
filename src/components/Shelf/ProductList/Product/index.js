import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../services/util';
import { addProduct } from '../../../../services/cart/actions';

const Product = ({ product, addProduct }) => {
  product.quantity = 1;

  let formattedPrice = formatPrice(product.price, product.currencyId);

  let productInstallment;

  let imgSrc = require(`../../../../static/products/${product.sku}_1.jpg`);


  function handleMouseOver(element) {

    let imgSrcChange = require(`../../../../static/products/${product.sku}_2.jpg`);
    let sku= product.sku;

    //imgSrc = document.getElementById(sku).src;
    imgSrc = document.getElementById(sku);
    imgSrc.src = imgSrcChange;
  }

  function handleMouseOut(element) {

      let imgSrcChange = require(`../../../../static/products/${product.sku}_1.jpg`);
      let sku= product.sku;

      //imgSrc = document.getElementById(sku).src;
      imgSrc = document.getElementById(sku);
      imgSrc.src = imgSrcChange;
  }



  if (!!product.installments) {
    const installmentPrice = product.price / product.installments;

    productInstallment = (
      <div className="installment">
        <span>o {product.installments} cuotas de </span>
        <b>
          {product.currencyFormat}
          {formatPrice(installmentPrice, product.currencyId)}
        </b>
      </div>
    );
  }

  return (

  
    <div
      className="shelf-item"
      onClick={() => addProduct(product)}
      data-sku={product.sku}
      onMouseOver={() => handleMouseOver()}
      onMouseOut={() => handleMouseOut()}
    >
      {product.isFreeShipping && (
        <div className="shelf-stopper">Envío gratis</div>
      )}
      <Thumb
        classes="shelf-item__thumb"
        src={imgSrc}
        alt={product.title}
        sku={product.sku}
        
      />
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
        </div>
        {productInstallment}
      </div>
      <div className="shelf-item__buy-btn">Añadir al carrito</div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProduct }
)(Product);
