import React from 'react';
import PropTypes from 'prop-types';

const Thumb = props => {
  return (
    <div className={props.classes}>
      <img id={props.sku} src={props.src} alt={props.alt} title={props.title} />
    </div>
  );
};

Thumb.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  sku: PropTypes.sku,
  classes: PropTypes.string,
  src: PropTypes.string.isRequired
};

export default Thumb;
