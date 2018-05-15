import React from 'react';

/*
  Button3 Component
  @param {string} name
  @param {func} handleClick
  @returns button element
 */
const Button3 = ({ value, handleClick }) => {
  return (
  <input className="button" type="button" value={value} onClick={handleClick} />
  );
}

export default Button3;
