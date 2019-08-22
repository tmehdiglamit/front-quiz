import React from 'react';
import PropTypes from 'prop-types';

const Thumb = props => {
  return (
    <div
      className={props.classes}
      onMouseOver={() => {return props.mouseOverFunction ? props.mouseOverFunction() : null;}}
      onMouseOut={() => {return props.mouseOverFunction ? props.mouseOverFunction() : null;}}
    >
      <img src={props.src} alt={props.alt} title={props.title} />
    </div>
  );
};

Thumb.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  classes: PropTypes.string,
  src: PropTypes.string.isRequired,
  mouseOverFunction: PropTypes.func
};

export default Thumb;
